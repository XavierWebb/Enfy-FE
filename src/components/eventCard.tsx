import styled from "styled-components"
import { Text_Two, Tittle_Two } from "./texts"
import { Button } from "./button"
import { darkMode_palette } from "../common/styles"

interface CardProps {
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
    max-width: 33rem;
    max-height: 20rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const EventCard = ({
    name,
    description,
    price,
}: CardProps) => {

    return (
        <StyledCard>
            <Tittle_Two>{name}</Tittle_Two>
            <Text_Two>{description}</Text_Two>
            <Text_Two><strong>Entry Price: {price}$ USD</strong></Text_Two>
            <Button>See Event</Button>
        </StyledCard>
    )
}