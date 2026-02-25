import { useForm } from "react-hook-form";
import { BaseModal } from "./baseModal";
import {z} from 'zod';
import { zodResolver } from "@hookform/resolvers/zod";
import { ErrorText, Text_Two } from "../components/texts";
import { TextInput } from "../components/input";
import { Button } from "../components/button";
import { useAppDispatch } from "../redux/hooks";
import { disableModal } from "../redux/modalsSlice";
import { useSelector } from "react-redux";
import type { RootState } from "../redux/store";
import styled from "styled-components";
import { toast } from "react-toastify";
import { BuyEvent } from "../requests/eventsRequest";
import { unwrapResult } from "@reduxjs/toolkit";

const schema = z.object({
    master_card: z.string().max(16),
    security_number: z.string().max(3),

})

type FormProps = z.infer<typeof schema>

const StyledForm = styled.form`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    width: 100%;
    align-items: center;
`

export const BuyEventModal = () => {
    const dispatch = useAppDispatch();
    const modal = useSelector((state:RootState)=> state.modals.buyEvent)
    const event = useSelector((state:RootState)=> state.events.EventView)

    const { 
        handleSubmit,
        formState: {errors},
        register,
        reset,
    } = useForm<FormProps>({
        resolver: zodResolver(schema),
    })

    const OnSubmit = async(data: FormProps) => {
        try {
            const newData = {
                id: event.id,
                master_card: Number(data.master_card),
                security_number: Number(data.security_number)
            }

            await dispatch(BuyEvent(newData)).then(unwrapResult)
            toast.success('Event purchased!')
            reset();
            dispatch(disableModal('buyEvent'))
        } catch(error: any) {
            toast.error(error)
        }
    }

    if (!modal){
        return;
    }

    return (
        <BaseModal title="Buy Event">
            <StyledForm onSubmit={handleSubmit(OnSubmit)}>

                <Text_Two>Mastercard</Text_Two>
                <TextInput
                    placeholder="xxxx-xxxx-xxxx-xxxx"
                    {...register('master_card')}
                    type="number"
                />
                {errors.master_card && <ErrorText>{errors.master_card.message}</ErrorText>}

                <Text_Two>Security Number</Text_Two>
                <TextInput
                    {...register('security_number')}
                    type="number"
                    placeholder="xxx"
                />

                {errors.security_number && <ErrorText>{errors.security_number.message}</ErrorText>}

                <div>
                    <Button variant="secondary" type="button" onClick={()=>{
                        dispatch(disableModal('buyEvent'))
                        reset();
                    }}>Cancel</Button>
                    <Button type="submit">Buy</Button>
                </div>
            </StyledForm>
        </BaseModal>
    )
}