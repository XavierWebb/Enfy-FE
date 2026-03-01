import styled from "styled-components"
import { Tittle_One } from "../components/texts"
import type React from "react"
import { useSelector } from "react-redux"
import type { RootState } from "../redux/store"

interface ModalProps {
    children: React.ReactNode,
    title: string,
}

const StyledModal = styled.div<{Mode: 'dark' | 'light'}>`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: ${({Mode}) => Mode === 'light' ? 'white' : '#131313'};
    border: 1px ${({Mode}) => Mode === 'light' ? 'black' : 'transparent'} solid;
    padding: 2rem 6rem;
    border-radius: 1rem;
    z-index: 3;
    max-width: 35%;
    width: 35%;
    max-height: 60%;
    gap: 0.4rem;
    justify-content: center;
`

const BlurBackground = styled.div`
    backdrop-filter: blur(0.5rem);
    display: flex;
    width: 100%;
    height: 100%;
    position: fixed;
    z-index: 2;
    justify-content: center;
    align-items: center;
`

export const BaseModal = ({
    children,
    title,
}: ModalProps) => {

    const Mode = useSelector((state:RootState) => state.users.currentUser.mode)
    return (
        <BlurBackground>
            <StyledModal Mode={Mode}>
                <Tittle_One>{title}</Tittle_One>
                {children}
            </StyledModal>
        </BlurBackground>
    )
}