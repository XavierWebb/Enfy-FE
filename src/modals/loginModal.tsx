import { useForm } from "react-hook-form";
import { BaseModal } from "./baseModal";
import {z} from 'zod';
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "../components/button";
import { ErrorText, Text_One } from "../components/texts";
import { TextInput } from "../components/input";
import { useSelector } from "react-redux";
import type { RootState } from "../redux/store";
import { useAppDispatch } from "../redux/hooks";
import { disableModal } from "../redux/modalsSlice";
import { toast } from "react-toastify";
import { loginUser } from "../requests/userRequests";
import { unwrapResult } from "@reduxjs/toolkit";

const schema = z.object({
    email: z.email(),
    password: z.string().min(8,'The min chars for passwords are 8'),
})

type FormFields = z.infer<typeof schema>


export const LoginModal = () => {
    const dispatch = useAppDispatch();
    const modal = useSelector((state: RootState) => state.modals.login)
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm<FormFields>({
        resolver: zodResolver(schema)
    })

    const OnSubmit = async(data: FormFields) => {
        try{
            await dispatch(loginUser(data)).then(unwrapResult);
            toast.success('Successful login');
            dispatch(disableModal('login'));

        } catch(e: any){
            toast.error(e);
        }
    }


    if (!modal){
        return;
    }

    return(
        <BaseModal title="Login">
            <form onSubmit={handleSubmit(OnSubmit)}>
                <Text_One>email:</Text_One>
                <TextInput
                    {...register('email')}
                />
                { errors.email && <ErrorText> {errors.email.message} </ErrorText> }

                <Text_One>password:</Text_One>
                <TextInput
                    {...register('password')}
                />
                { errors.password && <ErrorText> {errors.password.message} </ErrorText> }

                <div>
                    <Button type="button" variant="secondary" onClick={()=>{
                        dispatch(disableModal('login'))
                    }}>Cancel</Button>
                    <Button type="submit">Login</Button>
                </div>
            </form>
        </BaseModal>
    )
}