import { useSelector } from "react-redux"
import { Tittle_One, Tittle_Two } from "../components/texts"
import type { RootState } from "../redux/store"
import { EventCard } from "../components/eventCard"
import styled from "styled-components"
import { PageDivisorTwo } from "../components/divisor"
import { useTranslation } from "react-i18next"
import { useObserver } from "../common/observer"
import { NavBar } from "../components/navbar"
import { useNavigate } from "react-router"
import { useEffect } from "react"


const EventContainer = styled.div`
    display: flex;
    flex-direction: wrap;
`

export const SearchPage = () => {
    const events = useSelector((state: RootState) => state.events.EventSearched)
    const content = useSelector((state: RootState) => state.events.searched)
    const { t } = useTranslation();
    const { ref, visible } = useObserver()
    const user = useSelector((state: RootState) => state.users.currentUser)
    const navigate = useNavigate();

    useEffect(() => {
        if (user.id == 0) {
            navigate('/')
        }
    }, [])

    if (events.length == 0) {
        return (
            <>
                <NavBar />
                <PageDivisorTwo ref={ref} $visible={visible}>
                    <Tittle_One>{t('searchPage.noEvents')}</Tittle_One>
                </PageDivisorTwo>
            </>
        )
    }
    return (
        <>
            <NavBar />
            <PageDivisorTwo ref={ref} $visible={visible}>
                <Tittle_Two>{t('searchPage.results')} "{content}"</Tittle_Two>
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
        </>
    )
}