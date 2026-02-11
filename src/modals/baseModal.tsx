import styled from "styled-components"
import { Tittle_One } from "../components/texts"
import type React from "react"

interface ModalProps {
    children: React.ReactNode,
    title: string,
}

const StyledModal = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #131313;
    padding: 2rem 6rem;
    border-radius: 1rem;
    z-index: 3;
    max-width: 25%;
    width: 25%;
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
    return (
        <BlurBackground>
            <StyledModal>
                <Tittle_One>{title}</Tittle_One>
                {children}
            </StyledModal>
        </BlurBackground>
    )
}