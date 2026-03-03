import styled from "styled-components"
import { Tittle_One } from "../components/texts"
import type React from "react"
import { useSelector } from "react-redux"
import type { RootState } from "../redux/store"
import { useObserver } from "../common/observer"

interface ModalProps {
    children: React.ReactNode,
    title: string,
}

const StyledModal = styled.div<{Mode: 'dark' | 'light', $visible: boolean}>`
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
    opacity: 1;
    & {
        opacity: 0;
        transition: opacity 1s ease
    }
    ${({$visible}) => $visible && `
        & {
            opacity: 1;
        }

    `}
`

const BlurBackground = styled.div<{$visible: boolean}>`
    backdrop-filter: blur(0.5rem);
    display: flex;
    width: 100%;
    height: 100%;
    position: fixed;
    z-index: 2;
    justify-content: center;
    align-items: center;
        & {
        opacity: 0;
        transition: opacity 0.5s ease
    }
    ${({$visible}) => $visible && `
        & {
            opacity: 1;
        }

    `}
`

export const BaseModal = ({
    children,
    title,
}: ModalProps) => {
    const Mode = useSelector((state:RootState) => state.users.currentUser.mode);
    const {ref, visible} = useObserver();
    return (
        <BlurBackground ref={ref} $visible={visible}>
            <StyledModal Mode={Mode} ref={ref} $visible={visible}>
                <Tittle_One>{title}</Tittle_One>
                {children}
            </StyledModal>
        </BlurBackground>
    )
}