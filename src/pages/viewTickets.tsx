import { useSelector } from "react-redux"
import type { RootState } from "../redux/store"
import { useSearchParams } from "react-router"
import { PageDivisor, PageDivisorTwo } from "../components/divisor"
import { Tittle_One, Tittle_Two } from "../components/texts"
import { NavBar } from "../components/navbar"
import { useEffect } from "react"
import { useAppDispatch } from "../redux/hooks"
import { fetchTickets } from "../requests/ticketsRequest"
import { Ticket } from "../components/ticket"
import styled from "styled-components"

const TicketContainer = styled.div`
    display: flex;
    gap: 1rem;
`

export const ViewTickets = () => {
    const [searchParams] = useSearchParams();
    const dispatch = useAppDispatch();
    const event_url = searchParams.get('event');
    const tickets = useSelector((state: RootState) => state.tickets.tickets);

    useEffect(() => {
        dispatch(fetchTickets(Number(event_url)))
    }, [dispatch])

    if (tickets.length == 0) {
        return (
            <>
                <NavBar />
                <PageDivisor>
                    <Tittle_One>You have not purchased any tickets for this Event</Tittle_One>
                </PageDivisor>
            </>
        )
    }

    return (
        <>
            <NavBar />
            <PageDivisorTwo>
                <Tittle_Two>Tickets for this event:</Tittle_Two>
                <TicketContainer>
                    {
                        tickets.map((e) => {
                            return (
                                <Ticket
                                    id={e.id}
                                    status={e.status}
                                    event_id={e.event_id}
                                    user_id={e.user_id}
                                />
                            )
                        })
                    }
                </TicketContainer>
            </PageDivisorTwo>
        </>
    )
}