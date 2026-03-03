import styled from "styled-components";

export const PageDivisor = styled.div<{ $visible: boolean }>`
    margin-top: 3rem;
    display: flex;
    flex-direction: column;
    margin-left: 10rem;
    margin-right: 10rem;
    height: 100vh;
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
`

export const PageDivisorTwo = styled.div<{$visible: boolean}>`
    margin-top: 3rem;
    display: flex;
    flex-direction: column;
    margin-left: 10rem;
    margin-right: 10rem;
    height: 100vh;
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
`