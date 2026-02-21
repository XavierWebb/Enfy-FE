import { Controller, useForm } from "react-hook-form"
import { BaseModal } from "./baseModal"
import { z } from 'zod'
import { zodResolver } from "@hookform/resolvers/zod"
import { useAppDispatch } from "../redux/hooks"
import { createEvent } from "../requests/eventsRequest"
import { unwrapResult } from "@reduxjs/toolkit"
import { toast } from "react-toastify"
import { useSelector } from "react-redux"
import type { RootState } from "../redux/store"
import { Button } from "../components/button"
import { disableModal } from "../redux/modalsSlice"
import { DateTimeInput, TextInput } from "../components/input"
import styled from "styled-components"
import { ErrorText } from "../components/texts"

const schema = z.object({
    name: z.string(),
    description: z.string(),
    price: z.number(),
    eventDate: z.date(),
    ubication: z.string()
})

export type FormProps = z.infer<typeof schema>

const StyledForm = styled.form`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    align-items: center;
    text-align: center;
`

export const CreateEventModal = () => {
    const modal = useSelector((state: RootState) => state.modals.createEvent)
    const dispatch = useAppDispatch();

    const {
        register,
        handleSubmit,
        control,
        reset,
        formState: { errors }
    } = useForm<FormProps>({
        resolver: zodResolver(schema)
    })

    const OnSubmit = async (data: FormProps) => {
        try {
            await dispatch(createEvent(data)).then(unwrapResult);
            toast.success('Event created successfuly');
            dispatch(disableModal('createEvent'));
            reset();
        } catch (error: any) {
            toast.error(error);
        }
    }

    if (!modal) {
        return;
    }

    return (
        <BaseModal title="Create Event">
            <StyledForm onSubmit={handleSubmit(OnSubmit)}>

                <TextInput
                    placeholder="Name"
                    {...register('name')}
                />

                {errors.name && <ErrorText>{errors.name.message}</ErrorText>}

                <TextInput
                    placeholder="Description"
                    {...register('description')}
                />

                {errors.description && <ErrorText>{errors.description.message}</ErrorText>}

                <TextInput
                    placeholder="Price"
                    type="number"
                    {...register('price', {valueAsNumber: true})}
                />

                {errors.price && <ErrorText>{errors.price.message}</ErrorText>}

                <TextInput
                    placeholder="ubication"
                    {...register('ubication')}
                />

                {errors.ubication && <ErrorText>{errors.ubication.message}</ErrorText>}

                <Controller
                    name="eventDate"
                    control={control}
                    render={({ field: { onChange, onBlur, value } }) => (
                        <DateTimeInput
                            value={value}
                            onChange={(e) => {
                                const localValue = e.target.value;
                                const localDate = new Date(localValue);

                                const utcDate = new Date(
                                    localDate.getTime() - localDate.getTimezoneOffset() * 60000
                                )
                                onChange(utcDate);
                            }}
                            onBlur={onBlur}
                        />
                    )}
                />

                {errors.eventDate && <ErrorText>{errors.eventDate.message}</ErrorText>}

                <div>
                    <Button type='button' variant="secondary" onClick={() => {
                        dispatch(disableModal('createEvent'))
                    }}>Cancel</Button>

                    <Button type="submit">Create</Button>
                </div>
                
            </StyledForm>
        </BaseModal>
    )
}