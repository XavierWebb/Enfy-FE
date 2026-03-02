import { useNavigate, useSearchParams } from "react-router";
import { Text_One, Tittle_One } from "../components/texts";
import { PageDivisorTwo } from "../components/divisor";
import { useEffect } from "react";
import { useAppDispatch } from "../redux/hooks";
import { useSelector } from "react-redux";
import type { RootState } from "../redux/store";
import { fetchEvent } from "../requests/eventsRequest";
import { Button } from "../components/button";
import { formatUTCDate } from "../common/dateFormat";
import { NavBar } from "../components/navbar";
import { enableModal } from "../redux/modalsSlice";
import { useTranslation } from "react-i18next";

export const ViewEvent = () => {
    const [searchParams] = useSearchParams();
    const dispatch = useAppDispatch();
    const event = searchParams.get('event');
    const user = useSelector((state: RootState) => state.users.currentUser)
    const eventInfo = useSelector((state: RootState) => state.events.EventView);
    const navigate = useNavigate()
    const {t} = useTranslation()

    useEffect(() => {
        if (eventInfo.id == 0) {
            dispatch(fetchEvent(Number(event)))
        }
    }, [dispatch])

    return (
        <>
            <NavBar />
            <PageDivisorTwo>
                <Tittle_One>{eventInfo.name}</Tittle_One>

                <Text_One><strong>{t('viewEvent.eventDay')}{formatUTCDate(eventInfo.eventDate)}</strong></Text_One>
                <Text_One><strong>{t('viewEvent.price')}{eventInfo.price}$ USD</strong></Text_One>
                <Text_One><strong>{t('viewEvent.description')}</strong></Text_One>
                <Text_One>{eventInfo.description}</Text_One>
                {eventInfo.owner_id == user.id ? (
                    <Tittle_One>{t('viewEvent.youAreTheOwner')}</Tittle_One>
                ) : (
                    <>
                        {
                            user.eventsBought.some((e) => e.id == eventInfo.id) ? (
                                <>
                                    <div>
                                        <Button onClick={()=> {
                                            navigate(`/tickets?event=${eventInfo.id}`)
                                        }}>{t('viewEvent.viewTickets')}</Button>
                                        <Button onClick={() => {
                                            dispatch(enableModal('buyEvent'));
                                        }}>{t('viewEvent.buyAnotherTicket')}</Button>
                                    </div>
                                </>
                            ) : (
                                <div>
                                    <Button onClick={() => {
                                        dispatch(enableModal('buyEvent'));
                                    }}>{t('viewEvent.buyTicket')}</Button>
                                </div>
                            )

                        }
                    </>
                )
                }

            </PageDivisorTwo>
        </>
    )
};