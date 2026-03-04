import { useSelector } from "react-redux";
import { NavBar } from "../components/navbar"
import { clearSearched, search_content, update_searchStatus } from "../redux/eventsSlice";
import { useAppDispatch } from "../redux/hooks"
import { SearchPage } from "./searchPage"
import type { RootState } from "../redux/store";
import { useEffect } from "react";
import styled from "styled-components";
import { Text_One, Text_Two, Tittle_Two } from "../components/texts";
import { PageDivisor } from "../components/divisor";
import { palette } from "../common/styles";
import { Button } from "../components/button";
import { EventCard } from "../components/eventCard";
import { fetchRecommendedEvents } from "../requests/eventsRequest";
import { useTranslation } from "react-i18next";
import { useObserver } from "../common/observer";

const Board = styled.div`
    border-radius: 1rem;
    padding: 1rem;
    border: 0.1rem solid ${palette.gray};
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
    flex-wrap: wrap;
    @media(max-width: 768px){
        justify-content: center;
    }
`

export const HomePage = () => {
    const dispatch = useAppDispatch();
    const recommendedEvents = useSelector((state: RootState) => state.events.EventsRecommended)
    const { t } = useTranslation();
    const { ref, visible } = useObserver();
    
    useEffect(() => {
        dispatch(update_searchStatus(false))
        dispatch(search_content(''))
        dispatch(clearSearched())
        dispatch(fetchRecommendedEvents())
    }, [dispatch])

    return (
        <>
            <NavBar />
            <PageDivisor ref={ref} $visible={visible}>
                <Board>
                    <InsideBoard>

                        <Tittle_Two>{t('home.businessAplication')}</Tittle_Two>
                        <Text_Two>{t('home.bam')}
                        </Text_Two>
                        <Button>{t('home.apply')}</Button>
                    </InsideBoard>
                </Board>
                <Category>
                    <Tittle_Two>
                        {t('home.recommended')}
                    </Tittle_Two>
                    <EventContainer>
                        {
                            recommendedEvents.length == 0 ? (
                                <Text_One>{t('home.notRecommended')}</Text_One>
                            ) : (
                                <>
                                    {
                                        recommendedEvents.map((e) => {
                                            return (
                                                <EventCard
                                                    event={e}
                                                    key={e.id}
                                                />
                                            )
                                        })
                                    }
                                </>
                            )
                        }
                    </EventContainer>
                </Category>
            </PageDivisor>

        </>
    )
}