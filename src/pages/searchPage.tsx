import { useSelector } from "react-redux"
import { Tittle_One, Tittle_Two } from "../components/texts"
import type { RootState } from "../redux/store"
import { EventCard } from "../components/eventCard"
import styled from "styled-components"
import { PageDivisorTwo } from "../components/divisor"


const EventContainer = styled.div`
    display: flex;
`

export const SearchPage = () => {
    const events = useSelector((state: RootState) => state.events.EventSearched)
    const content = useSelector((state: RootState) => state.events.searched)
    if (events.length == 0) {
        return (
            <>
                <Tittle_One>We found no events related to your search</Tittle_One>
            </>
        )
    }
    return (
        <PageDivisorTwo>
            <Tittle_Two>Your Results for: "{content}"</Tittle_Two>
            <EventContainer>
                {
                    events.map((e) => {
                        return (
                            <EventCard
                                event={e}
                                key={e.id}
                            />
                        )
                    })
                }
            </EventContainer>
        </PageDivisorTwo>
    )
}