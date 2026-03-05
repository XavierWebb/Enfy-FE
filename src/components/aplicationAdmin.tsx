import styled from "styled-components"
import { Text_One } from "./texts"
import { useSelector } from "react-redux"
import type { RootState } from "../redux/store"
import { Button } from "./button"
import { useAppDispatch } from "../redux/hooks"
import { AcceptAplication, RejectAplication, ViewBusinessAplications } from "../requests/adminRequests"
import { unwrapResult } from "@reduxjs/toolkit"
import { toast } from "react-toastify"

interface SpectedProps {
    id: number,
    status: string,
    user_id: number,
    name: string,
    contact: string,
    theme: string,
}

const StyledContainer = styled.div<{ Mode: 'dark' | 'light' }>`
    display: flex;
    flex-direction: column;
    padding: 1rem;
    flex-wrap: wrap;
    border: solid 1px ${({ Mode }) => Mode === 'light' ? 'black' : 'white'};


    @media(max-width: 768px){
        padding: 0.25rem;
    }
`

export const AplicationAdmin = ({
    id,
    status,
    user_id,
    name,
    contact,
    theme
}: SpectedProps) => {
    const mode = useSelector((state: RootState) => state.users.currentUser.mode);
    const dispatch = useAppDispatch();

    return (
        <StyledContainer Mode={mode}>
            <Text_One><strong>id:</strong> {id}</Text_One>
            <Text_One><strong>status:</strong> {status}</Text_One>
            <Text_One><strong>user_id:</strong> {user_id}</Text_One>
            <Text_One><strong>name:</strong> {name}</Text_One>
            <Text_One><strong>contact:</strong> {contact}</Text_One>
            <Text_One><strong>theme:</strong> {theme}</Text_One>
            <div>
                <Button onClick={async () => {
                    try {
                        await dispatch(RejectAplication(id)).then(unwrapResult);
                        toast.success('Aplication Rejected!')
                        dispatch(ViewBusinessAplications());
                    } catch (error: any) {
                        toast.error(error);
                    }
                }}>Reject</Button>

                <Button onClick={async () => {
                    try {
                        await dispatch(AcceptAplication(id)).then(unwrapResult);
                        toast.success('Aplication Accepted!')
                        dispatch(ViewBusinessAplications());
                    } catch (error: any) {
                        toast.error(error);
                    }
                }}>Accept</Button>
            </div>
        </StyledContainer>
    )
}