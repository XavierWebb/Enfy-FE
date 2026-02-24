import { useSelector } from "react-redux";
import { NavBar } from "../components/navbar"
import { clearSearched, search_content, update_searchStatus } from "../redux/eventsSlice";
import { useAppDispatch } from "../redux/hooks"
import { SearchPage } from "./searchPage"
import type { RootState } from "../redux/store";
import { useEffect } from "react";
import styled from "styled-components";
import { Text_Two, Tittle_Two } from "../components/texts";
import { PageDivisor } from "../components/divisor";
import { darkMode_palette } from "../common/styles";
import { Button } from "../components/button";
import { EventCard } from "../components/eventCard";

const Board = styled.div`
    border-radius: 1rem;
    padding: 1rem;
    border: 0.1rem solid ${darkMode_palette.gray};
    width: 80%;
    max-width: 80%;
    display: flex;
    justify-content: center;
    align-items: center;
    max-height: fit-content;
`

const InsideBoard = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    max-width: 40%;
`

const Category = styled.div`
    margin-top: 3rem;
    margin-bottom: 3rem;
    display: flex;
    flex-direction: column;
    align-self: flex-start;

`

const EventContainer = styled.div`
    display: flex;
`

export const HomePage = () => {
    const dispatch = useAppDispatch();
    const searchStatus = useSelector((state: RootState) => state.events.searchStatus)
    const recommendedEvents = useSelector((state:RootState) => state.events.EventsRecommended)
    useEffect(() => {
        dispatch(update_searchStatus(false))
        dispatch(search_content(''))
        dispatch(clearSearched())
    }, [dispatch])

    return (
        <>
            <NavBar />
            {
                searchStatus == false ? (
                    <PageDivisor>
                        <Board>
                            <InsideBoard>

                                <Tittle_Two>Business Acount Aplication</Tittle_Two>
                                <Text_Two>Your company needs to create an event? Apply and get the
                                    authorization for create an event on our website.
                                </Text_Two>
                                <Button>Apply</Button>
                            </InsideBoard>
                        </Board>
                        <Category>
                            <Tittle_Two>
                                Recommended
                            </Tittle_Two>
                            <EventContainer>
                                {
                                    recommendedEvents.map((e)=> {
                                        return (
                                            <EventCard
                                                event={e}
                                                key={e.id}
                                            />
                                        )
                                    })
                                }
                            </EventContainer>
                        </Category>
                    </PageDivisor>
                ) : <SearchPage />
            }

        </>
    )
}