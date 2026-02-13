import { useSelector } from "react-redux"
import {Tittle_One } from "../components/texts"
import type { RootState } from "../redux/store"
import { EventCard } from "../components/eventCard"
import styled from "styled-components"


const EventContainer = styled.div`
    display: flex;
`

export const SearchPage = () => {
    const events = useSelector((state: RootState) => state.events.EventSearched)

    if (events.length == 0) {
        return (
            <>
                <Tittle_One>We found no events related to your search</Tittle_One>
            </>
        )
    }
    return (
        <EventContainer>
            {
                events.map((e) => {
                    return (
                        <EventCard
                            key={e.id}
                            name={e.name}
                            description={e.description}
                            price={e.price}
                        />
                    )
                })
            }
        </EventContainer>
    )
}