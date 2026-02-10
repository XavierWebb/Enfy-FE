import type React from "react"
import styled from "styled-components";
import { darkMode_palette } from "../common/styles";

interface ButtonProps {
    children: React.ReactNode;
}

const StyledButton = styled.button`
    border: 0;
    background-color: ${darkMode_palette.green};
    padding: 1rem 2rem;;
    text-align: center;
    color: white;
    font-family: 'Jost', sans-serif;
    font-size: 1.5rem;
    font-weight: 700;
    margin: 1rem;
    border-radius: 1rem;
    cursor: pointer;
    
    transition: all 0.4s ease;

    &:hover {
        background-color: ${darkMode_palette.light_green}
    }

`

export const Button = ({
    children
}: ButtonProps) => {
    return (
        <StyledButton>
            {children}
        </StyledButton>
    )
}