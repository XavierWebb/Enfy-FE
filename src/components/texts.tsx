import type React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import type { RootState } from "../redux/store";

interface TextProps {
    children: React.ReactNode
}

export const Styled_Tittle_One = styled.h1<{Mode: 'dark' | 'light'}>`
    color: ${({Mode}) => Mode === 'light' ? 'black' : 'white'};
    font-family: 'Jost', sans-serif;
    font-size: 2.5rem;
    font-weight: 800;
`

export const Styled_Tittle_Two = styled.h1<{Mode: 'dark' | 'light'}>`
    color: ${({Mode}) => Mode === 'light' ? 'black' : 'white'};
    font-family: 'Jost', sans-serif;
    font-size: 2rem;
    font-weight: 800;
`

export const Styled_Text_One = styled.p<{Mode: 'dark' | 'light'}>`
    color: ${({Mode}) => Mode === 'light' ? 'black' : 'white'};
    font-family: 'Jost', sans-serif;
    font-size: 1.5rem;
    margin: 0;
`

export const Styled_Text_Two = styled.p<{Mode: 'dark' | 'light'}>`
    color: ${({Mode}) => Mode === 'light' ? 'black' : 'white'};
    font-family: 'Jost', sans-serif;
    font-size: 1.25rem;
    margin: 0;
`

export const Text_Two = ({
    children
}: TextProps) => {
    const Mode = useSelector((state: RootState) => state.users.currentUser.mode)

    return (
        <Styled_Text_Two Mode={Mode}>
            {children}
        </Styled_Text_Two>
    )
}

export const Text_One = ({
    children
}: TextProps) => {
    const Mode = useSelector((state: RootState) => state.users.currentUser.mode)

    return (
        <Styled_Text_One Mode={Mode}>
            {children}
        </Styled_Text_One>
    )
}

export const Tittle_One = ({
    children
}: TextProps) => {
    const Mode = useSelector((state: RootState) => state.users.currentUser.mode)

    return (
        <Styled_Tittle_One Mode={Mode}>
            {children}
        </Styled_Tittle_One>
    )
}

export const Tittle_Two = ({
    children
}: TextProps) => {
    const Mode = useSelector((state: RootState) => state.users.currentUser.mode)

    return (
        <Styled_Tittle_Two Mode={Mode}>
            {children}
        </Styled_Tittle_Two>
    )
}

export const ErrorText = styled.p`
    font-family: 'Jost', sans-serif;
    font-size: 1.5rem;
    margin: 0;
    color: red;
`