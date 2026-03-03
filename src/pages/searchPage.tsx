import { useSelector } from "react-redux"
import { Tittle_One, Tittle_Two } from "../components/texts"
import type { RootState } from "../redux/store"
import { EventCard } from "../components/eventCard"
import styled from "styled-components"
import { PageDivisorTwo } from "../components/divisor"
import { useTranslation } from "react-i18next"
import { useObserver } from "../common/observer"


const EventContainer = styled.div`
    display: flex;
`

export const SearchPage = () => {
    const events = useSelector((state: RootState) => state.events.EventSearched)
    const content = useSelector((state: RootState) => state.events.searched)
    const {t} = useTranslation();
    const {ref, visible} = useObserver()

    if (events.length == 0) {
        return (
            <PageDivisorTwo ref={ref} $visible={visible}>
                <Tittle_One>{t('searchPage.noEvents')}</Tittle_One>
            </PageDivisorTwo>
        )
    }
    return (
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
    )
}