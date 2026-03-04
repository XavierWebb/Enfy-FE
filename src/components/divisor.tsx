import styled from "styled-components";

export const PageDivisor = styled.div<{ $visible: boolean }>`
    margin-top: 3rem;
    display: flex;
    flex-direction: column;
    margin-left: 10rem;
    margin-right: 10rem;
    align-items: center;
    gap: 1rem;

    & > * {
        opacity: 0;
        transition:
            opacity 1s ease;
    }
    ${({ $visible }) =>
        $visible && `
            & > * {
                opacity: 1;
            }
        `
    }

    @media(max-width: 768px){
        margin-left: 1rem;
        margin-right: 1rem;
    }
`

export const PageDivisorTwo = styled.div<{$visible: boolean}>`
    margin-top: 3rem;
    display: flex;
    flex-direction: column;
    margin-left: 10rem;
    margin-right: 10rem;
    gap: 1rem;
    
    & > * {
        opacity: 0;
        transition:
            opacity 1s ease;
    }
    ${({ $visible }) =>
        $visible && `
            & > * {
                opacity: 1;
            }
        `
    }

    @media(max-width: 768px){
        margin-left: 1rem;
        margin-right: 1rem;
    }
`