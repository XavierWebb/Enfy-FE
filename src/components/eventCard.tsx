import styled from "styled-components"
import { Text_Two, Tittle_Two } from "./texts"
import { Button } from "./button"
import { darkMode_palette } from "../common/styles"
import { useNavigate } from "react-router"
import { useAppDispatch } from "../redux/hooks"
import { fetchEvent } from "../requests/eventsRequest"

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
    border: solid 0.15rem ${darkMode_palette.gray};
    margin: 1rem;
    margin-top: 2rem;
    gap: 0.5rem;
    margin-bottom: 2rem;
    max-width: 25rem;
    width: 33rem;
    max-height: 23rem;
    height: 23rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
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

    if (!event) {
        return;
    }
    return (
        <StyledCard>
            <Tittle_Two>{event.name}</Tittle_Two>
            <Line />
            <Text_Two>{event.description}</Text_Two>
            <Text_Two><strong>Entry Price: {event.price}$ USD</strong></Text_Two>
            <Button onClick={() => {
                dispatch(fetchEvent(event.id))
                navigate(`/view?event=${event.id}`)
            }}>View Event</Button>
        </StyledCard>
    )
}