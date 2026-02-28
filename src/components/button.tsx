import type React from "react"
import styled from "styled-components";
import { darkMode_palette, lightMode_palette } from "../common/styles";

interface ButtonProps {
    children: React.ReactNode
    variant?: 'primary' | 'secondary' | 'third'
    type?: 'button' | 'submit'
    disabled?: boolean
    onClick?: () => void
}

const variantMapper = {
    primary: {
        darkMode: {
            backgroundColor: darkMode_palette.green,
            disabledBackgroundColor: darkMode_palette.gray,
            hoverColor: darkMode_palette.light_green,
            textColor: 'white',
            disabledTextColor: darkMode_palette.light_gray,

            hoverTextColor: 'white',
        },
        lightMode: {
            textColor: 'black',
            disabledTextColor: '',
            hoverTextColor: 'black',
            disabledBackgroundColor: darkMode_palette.green,
        }
    },
    secondary: {
        darkMode: {
            backgroundColor: 'transparent',
            disabledBackgroundColor: 'transparent',
            hoverColor: 'transparent',
            disabledTextColor: '',

            textColor: 'white',
            hoverTextColor: darkMode_palette.light_gray,
        },
        lightMode: {
            backgroundColor: 'transparent',
            disabledBackgroundColor: 'transparent',
            hoverColor: 'transparent',
            disabledTextColor: '',

            textColor: 'black',
            hoverTextColor: lightMode_palette.light_gray,
        }
    },
    third: {
        darkMode: {
            backgroundColor: darkMode_palette.gray,
            disabledBackgroundColor: darkMode_palette.gray,
            hoverColor: darkMode_palette.dark_gray,
            disabledTextColor: '',
            textColor: 'white',
            hoverTextColor: 'white',
        },
        lightMode: {
            backgroundColor: 'transparent',
            disabledBackgroundColor: 'transparent',
            hoverColor: 'transparent',
            disabledTextColor: '',
            textColor: 'black',
            hoverTextColor: lightMode_palette.light_gray,
        }
    }
}

const StyledButton = styled.button<{ variant: 'primary' | 'secondary' | 'third', disabled: boolean }>`
    border: 0;
    background-color: ${({ variant, disabled }) => disabled ? variantMapper[variant].darkMode.disabledBackgroundColor : variantMapper[variant].darkMode.backgroundColor};
    padding: 0.75rem 2rem;;
    text-align: center;
    color: ${({ variant, disabled }) => disabled ? variantMapper[variant].darkMode.disabledTextColor : variantMapper[variant].darkMode.textColor};
    font-family: 'Jost', sans-serif;
    font-size: 1.5rem;
    font-weight: 700;
    margin: 1rem;
    border-radius: 0.75rem;
    cursor: pointer;
    
    transition: all 0.4s ease;


    opacity: ${({ disabled }) => (disabled ? 0.5 : 1)};
    pointer-events: ${({ disabled }) => (disabled ? 'none' : 'auto')};

    &:hover {
        background-color: ${({ variant, disabled }) => disabled ? variantMapper[variant].darkMode.disabledBackgroundColor : variantMapper[variant].darkMode.hoverColor};
        color: ${({ variant, disabled }) => disabled ? variantMapper[variant].darkMode.disabledTextColor : variantMapper[variant].darkMode.hoverTextColor};
    }

`

export const Button = ({
    children,
    variant = 'primary',
    type = 'button',
    disabled = false,
    onClick,
}: ButtonProps) => {
    return (
        <StyledButton variant={variant} type={type} onClick={onClick} disabled={disabled}>
            {children}
        </StyledButton>
    )
}