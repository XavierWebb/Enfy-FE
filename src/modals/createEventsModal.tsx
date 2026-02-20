import { useForm } from "react-hook-form"
import { BaseModal } from "./baseModal"
import {z} from 'zod'
import { zodResolver } from "@hookform/resolvers/zod"
import { useAppDispatch } from "../redux/hooks"
import { createEvent } from "../requests/eventsRequest"
import { unwrapResult } from "@reduxjs/toolkit"
import { toast } from "react-toastify"
import { useSelector } from "react-redux"
import type { RootState } from "../redux/store"
import { Button } from "../components/button"
import { disableModal } from "../redux/modalsSlice"
import { TextInput } from "../components/input"
import styled from "styled-components"
import { ErrorText } from "../components/texts"

const schema = z.object({
    name: z.string(),
    description: z.string(),
    price: z.number(),
    eventDate: z.date(),
})

type FormProps = z.infer<typeof schema>

const StyledForm = styled.form`
    display: flex;
    flex-direction: column;
    gap: 1rem;
`

export const CreateEventModal = () => {
    const modal = useSelector((state: RootState) => state.modals.createEvent)
    const dispatch = useAppDispatch();

    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm<FormProps>({
        resolver: zodResolver(schema)
    })
    
    const OnSubmit = async(data: FormProps) => {
        try {
            await dispatch(createEvent(data)).then(unwrapResult);
            toast.success('Event created successfuly');
            dispatch(disableModal('createEvent'))
        } catch (error: any) {
            toast.error(error);
        }
    }

    if (!modal){
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
                    {...register('price')}
                />

                {errors.price && <ErrorText>{errors.price.message}</ErrorText>}

                <TextInput
                    placeholder="Event Date"
                    {...register('eventDate')}
                />

                {errors.eventDate && <ErrorText>{errors.eventDate.message}</ErrorText>}

                <div>
                    <Button type='button' variant="secondary" onClick={()=>{
                        dispatch(disableModal('createEvent'))
                    }}>Cancel</Button>

                    <Button type="submit">Create</Button>
                </div>
            </StyledForm>
        </BaseModal>
    )
}