import styled from "styled-components"
import { Button } from "../components/button"
import { TextInput } from "../components/input"
import { ErrorText, Text_One } from "../components/texts"
import { BaseModal } from "./baseModal"
import { useForm } from "react-hook-form"
import {z} from 'zod';
import { zodResolver } from "@hookform/resolvers/zod"
import { createUser } from "../requests/userRequests"
import { useAppDispatch } from "../redux/hooks"
import { unwrapResult } from "@reduxjs/toolkit"
import { toast } from 'react-toastify';

const StyledForm = styled.form`
    
`

const schema = z.object({
    name: z.string().min(8, 'Your name needs to have 8 chars min'),
    email: z.email(),
    password: z.string().min(8, 'Your password needs to have 8 chars min'),
})

type FormFields = z.infer<typeof schema>

export const RegisterModal = () => {
    const dispatch = useAppDispatch();

    const {
        register,
        handleSubmit,
        formState: {errors}
    } = useForm<FormFields>({
        resolver: zodResolver(schema)
    });

    const OnSubmit = async (data: FormFields) => {
        try {
            await dispatch(createUser(data)).then(unwrapResult);
            toast.success('User created!')
        } catch (e: any) {
            toast.error(e);
        }
    }

    return (
        <BaseModal title="Register">
            <StyledForm onSubmit={handleSubmit(OnSubmit)}>
                <Text_One>username:</Text_One>
                <TextInput 
                    {...register('name')}
                />
                {errors.name && <ErrorText>{errors.name.message}</ErrorText>}

                <Text_One>email:</Text_One>
                <TextInput 
                    {...register('email')}
                />
                {errors.email && <ErrorText>{errors.email.message}</ErrorText>}

                <Text_One>password:</Text_One>
                <TextInput 
                    {...register('password')}
                />
                {errors.password && <ErrorText>{errors.password.message}</ErrorText>}

                <div>
                    <Button variant='secondary'>Cancel</Button>
                    <Button type='submit'>Register</Button>
                </div>
            </StyledForm>
        </BaseModal>
    )
}