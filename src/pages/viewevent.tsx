import { useSearchParams } from "react-router";
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

export const ViewEvent = () => {
    const [searchParams] = useSearchParams();
    const dispatch = useAppDispatch();
    const event = searchParams.get('event');

    const eventInfo = useSelector((state: RootState) => state.events.EventView);


    useEffect(() => {
        if (eventInfo.id == 0) {
            dispatch(fetchEvent(Number(event)))
        }
    }, [dispatch])

    return (
        <>
            <NavBar/>
            <PageDivisorTwo>
                <Tittle_One>{eventInfo.name}</Tittle_One>

                <Text_One><strong>Event Day: {formatUTCDate(eventInfo.eventDate)}</strong></Text_One>
                <Text_One><strong>Entry Price: {eventInfo.price}$ USD</strong></Text_One>
                <Text_One><strong>Description</strong></Text_One>
                <Text_One>{eventInfo.description}</Text_One>
                <div>
                    <Button>Buy Entry</Button>
                </div>
            </PageDivisorTwo>
        </>
    )
};