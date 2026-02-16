import styled from "styled-components"
import { Text_Two, Tittle_Two } from "./texts"
import { Button } from "./button"
import { darkMode_palette } from "../common/styles"
import { useNavigate } from "react-router"
import { useAppDispatch } from "../redux/hooks"
import { updateView } from "../redux/eventsSlice"
import { useSelector } from "react-redux"
import type { RootState } from "../redux/store"

interface CardProps {
    id: number,
    name: string,
    description: string,
    price: number,
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

export const EventCard = ({
    id,
    name,
    description,
    price,
}: CardProps) => {
    
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const event = useSelector((state: RootState) => state.events.EventSearched.find(e => e.id == id))

    if (!event) {
        return;
    }
    return (
        <StyledCard>
            <Tittle_Two>{name}</Tittle_Two>
            <Line/>
            <Text_Two>{description}</Text_Two>
            <Text_Two><strong>Entry Price: {price}$ USD</strong></Text_Two>
            <Button onClick={()=> {
                dispatch(updateView(event))
                navigate(`/view?event=${id}`)
            }}>See Event</Button>
        </StyledCard>
    )
}