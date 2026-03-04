import styled from "styled-components"
import { Text_Two, Tittle_Two } from "./texts"
import { Button } from "./button"
import { palette } from "../common/styles"
import { useNavigate } from "react-router"
import { useAppDispatch } from "../redux/hooks"
import { fetchEvent } from "../requests/eventsRequest"
import { useTranslation } from "react-i18next"

interface CardProps {
    event: {
        id: number,
        name: string,
        description: string,
        price: number,
    }
}

const StyledCard = styled.div`
    padding: 2rem;
    border-radius: 1rem;
    border: solid 0.15rem ${palette.gray};
    margin: 1rem;
    margin-top: 2rem;
    gap: 0.5rem;
    margin-bottom: 2rem;
    max-width: 25rem;
    width: 33rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;

    @media(max-width: 768px){
        width: 15rem;
        padding: 0.5rem;
        max-width: 15rem;
        gap: 0.1rem;
        height: auto;
        
    }
`

const Line = styled.div`
    width: 90%;
    height: 0.15rem;
    background-color: white;
    margin-bottom: 1rem;
`

export const EventCard = ({event}: CardProps) => {

    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const {t} = useTranslation()
    if (!event) {
        return null;
    }
    return (
        <StyledCard>
            <Tittle_Two>{event.name}</Tittle_Two>
            <Line />
            <Text_Two>{event.description}</Text_Two>
            <Text_Two><strong>{t('event.ticketPrice')} {event.price}$ USD</strong></Text_Two>
            <Button onClick={() => {
                dispatch(fetchEvent(event.id))
                navigate(`/view?event=${event.id}`)
            }}>{t('event.viewEvent')}</Button>
        </StyledCard>
    )
}