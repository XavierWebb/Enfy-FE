import styled from "styled-components"
import { BaseModal } from "./baseModal"
import { useSelector } from "react-redux"
import type { RootState } from "../redux/store"
import { z } from "zod"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { Button } from "../components/button"
import { toast } from "react-toastify"
import { useAppDispatch } from "../redux/hooks"
import { disableModal } from "../redux/modalsSlice"
import { BusinessAplication } from "../requests/userRequests"
import { unwrapResult } from "@reduxjs/toolkit"
import { TextInput } from "../components/input"
import { ErrorText } from "../components/texts"

const StyledForm = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 2rem;
`

const schema = z.object({
    name: z.string().min(1,'Your company needs a name!'),
    contact: z.email().min(1, 'We need your company contact email!'),
    theme: z.string().min(2, 'Your company needs a theme'),
})

type FormFields = z.infer<typeof schema>

export const ApplyModal = () => {
    const modal = useSelector((state: RootState) => state.modals.apply);
    const dispatch = useAppDispatch();
    const mode = useSelector((state: RootState) => state.users.currentUser.mode)

    const {
        register,
        reset,
        handleSubmit,
        formState: { errors, dirtyFields }
    } = useForm<FormFields>({
        resolver: zodResolver(schema),
        mode: 'onChange'
    })

    const ValidToPress =
        (dirtyFields.contact && !errors.contact)
        && (dirtyFields.name && !errors.name)
        && (dirtyFields.theme && !errors.theme)


    const OnSubmit = async (data: FormFields) => {
        try {
            await dispatch(BusinessAplication(data)).then(unwrapResult)
            dispatch(disableModal('apply'));
            toast.success('Aplication Submited!')
            reset();
        } catch (err: any) {
            toast.error(err)
        }
    }
    if (!modal) {
        return null;
    };
    return (
        <BaseModal title="Business Aplication">
            <StyledForm onSubmit={handleSubmit(OnSubmit)}>
                <TextInput
                    Mode={mode}
                    placeholder="Company Name"
                    {...register('name')}
                />

                {errors.name && <ErrorText>{errors.name.message}</ErrorText>}

                <TextInput
                    Mode={mode}
                    placeholder="Company contact"
                    {...register('contact')}
                />
                {errors.contact && <ErrorText>{errors.contact.message}</ErrorText>}

                <TextInput
                    Mode={mode}
                    placeholder="Company theme"
                    {...register('theme')}
                />
                {errors.theme && <ErrorText>{errors.theme.message}</ErrorText>}

                <div>
                    <Button type="button" variant="secondary" onClick={() => {
                        reset()
                        dispatch(disableModal('apply'))
                    }}>Cancel</Button>

                    <Button type="submit" disabled={!ValidToPress}>Apply</Button>
                </div>
            </StyledForm>
        </BaseModal>
    )
}