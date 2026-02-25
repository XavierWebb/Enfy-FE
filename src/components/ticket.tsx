import styled from "styled-components"
import { Text_Two, Tittle_Two } from "./texts"

interface TicketProps {
    id: number,
    status: string,
    event_id: number,
    user_id: number,
}

const StyledTicket = styled.div`
    border-radius: 1rem;
    border: 1px solid white;
    padding: 1.5rem;
    width: fit-content;
    margin: 1rem;
`

export const Ticket = ({
    id,
    status,
    event_id,
    user_id
}: TicketProps) => {
    return (
        <StyledTicket>
            <Tittle_Two>Event Ticket</Tittle_Two>
            <Text_Two>Status: {status}</Text_Two>
            <Text_Two>Ticket id: {id}</Text_Two>
            <Text_Two>Event id: {event_id}</Text_Two>
            <Text_Two>User id: {user_id}</Text_Two>
        </StyledTicket>
    )
}