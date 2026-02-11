import type React from "react"
import styled from "styled-components";
import { darkMode_palette, lightMode_palette } from "../common/styles";

interface ButtonProps {
    children: React.ReactNode;
    variant?: 'primary' | 'secondary'
    type?: 'button' | 'submit'
}

const variantMapper = {
    primary: {
        darkMode: {
            backgroundColor: darkMode_palette.green,
            hoverColor: darkMode_palette.light_green,
            textColor: 'white',
            hoverTextColor: 'white',
        },
        lightMode: {
            textColor: 'black',
            hoverTextColor: 'black',

        }
    },
    secondary: {
        darkMode: {
            backgroundColor: 'transparent',
            hoverColor: 'transparent',
            textColor: 'white',
            hoverTextColor: darkMode_palette.light_gray,
        },
        lightMode:{
            backgroundColor: 'transparent',
            hoverColor: 'transparent',
            textColor: 'black',
            hoverTextColor: lightMode_palette.light_gray,
        }
    }
}

const StyledButton = styled.button<{variant: 'primary' | 'secondary'}>`
    border: 0;
    background-color: ${({variant})=> variantMapper[variant].darkMode.backgroundColor};
    padding: 1rem 2rem;;
    text-align: center;
    color: ${({variant})=> variantMapper[variant].darkMode.textColor};
    font-family: 'Jost', sans-serif;
    font-size: 1.5rem;
    font-weight: 700;
    margin: 1rem;
    border-radius: 1rem;
    cursor: pointer;
    
    transition: all 0.4s ease;

    &:hover {
        background-color: ${({variant}) => variantMapper[variant].darkMode.hoverColor};
        color: ${({variant}) => variantMapper[variant].darkMode.hoverTextColor};
    }

`

export const Button = ({
    children,
    variant = 'primary',
    type = 'button'
}: ButtonProps) => {
    return (
        <StyledButton variant={variant} type={type}>
            {children}
        </StyledButton>
    )
}