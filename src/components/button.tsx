import type React from "react"
import styled from "styled-components";
import { palette } from "../common/styles";
import { useSelector } from "react-redux";
import type { RootState } from "../redux/store";

interface ButtonProps {
    children: React.ReactNode
    variant?: 'primary' | 'secondary' | 'third'
    type?: 'button' | 'submit'
    disabled?: boolean
    onClick?: () => void
}

const variantMapper = {
    primary: {
        dark: {
            backgroundColor: palette.green,
            disabledBackgroundColor: palette.gray,
            hoverColor: palette.light_green,
            textColor: 'white',
            disabledTextColor: palette.light_gray,
            hoverTextColor: 'white',
        },
        light: {
            backgroundColor: palette.light_green,
            textColor: 'white',
            disabledTextColor: '',
            hoverColor: palette.green,
            hoverTextColor: 'white',
            disabledBackgroundColor: palette.green,
        }
    },
    secondary: {
        dark: {
            backgroundColor: 'transparent',
            disabledBackgroundColor: 'transparent',
            hoverColor: 'transparent',
            disabledTextColor: '',

            textColor: 'white',
            hoverTextColor: palette.light_gray,
        },
        light: {
            backgroundColor: 'transparent',
            disabledBackgroundColor: 'transparent',
            hoverColor: 'transparent',
            disabledTextColor: '',

            textColor: 'black',
            hoverTextColor: palette.light_gray,
        }
    },
    third: {
        dark: {
            backgroundColor: palette.gray,
            disabledBackgroundColor: palette.gray,
            hoverColor: palette.dark_gray,
            disabledTextColor: '',
            textColor: 'white',
            hoverTextColor: 'white',
        },
        light: {
            backgroundColor: palette.very_very_light_gray,
            disabledBackgroundColor: 'transparent',
            hoverColor: palette.very_light_gray,
            disabledTextColor: palette.light_gray,
            textColor: 'black',
            hoverTextColor: 'black',
        }
    }
}

const StyledButton = styled.button<{ variant: 'primary' | 'secondary' | 'third', disabled: boolean, Mode: 'dark' | 'light' }>`
    border: 0;
    background-color: ${({ variant, disabled, Mode }) => disabled ? variantMapper[variant][Mode].disabledBackgroundColor : variantMapper[variant][Mode].backgroundColor};
    padding: 0.75rem 2rem;;
    text-align: center;
    color: ${({ variant, disabled, Mode }) => disabled ? variantMapper[variant][Mode].disabledTextColor : variantMapper[variant][Mode].textColor};
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
        background-color: ${({ variant, disabled, Mode }) => disabled ? variantMapper[variant][Mode].disabledBackgroundColor : variantMapper[variant][Mode].hoverColor};
        color: ${({ variant, disabled, Mode }) => disabled ? variantMapper[variant][Mode].disabledTextColor : variantMapper[variant][Mode].hoverTextColor};
    }

`

export const Button = ({
    children,
    variant = 'primary',
    type = 'button',
    disabled = false,
    onClick,
}: ButtonProps) => {
    const Mode = useSelector((state: RootState) => state.users.currentUser.mode)
    
    return (
        <StyledButton Mode={Mode} variant={variant} type={type} onClick={onClick} disabled={disabled}>
            {children}
        </StyledButton>
    )
}