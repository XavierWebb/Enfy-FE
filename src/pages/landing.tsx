import styled from "styled-components"
import { Button } from "../components/button"
import { Text_One, Tittle_One } from "../components/texts"
import { LandingBackground } from "../components/LandingBackground"
import { useAppDispatch } from "../redux/hooks"
import { enableModal } from "../redux/modalsSlice"
import { useObserver } from "../common/observer"

const InfoContainer = styled.div<{$visible: boolean}>`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    text-align: end;
    margin-bottom: 8rem;
    max-width: 36rem;

    & > * {
        opacity: 0;
        transition:
            opacity 1s ease;
    }
    ${({$visible}) => 
        $visible && `
            & > * {
                opacity: 1;
            }
        `
    }
`
const Line = styled.div`
    height: 1px;
    background-color: white;
    width: 100%;
`

const LandingLimit = styled.div`
    display: flex;
    margin-left: 10rem;
    margin-right: 10rem;
    height: 100vh;
    justify-content: flex-end;
    align-items: flex-end;
`

export const LandingPage = () => {
    const dispatch = useAppDispatch();
    const {ref, visible} = useObserver();

    return (
        <>
        <LandingBackground/>
        <LandingLimit>
            <InfoContainer ref={ref} $visible={visible}>
                <Tittle_One>Trying to find the best event? Try Enfy.</Tittle_One>
                <Line />
                <Text_One>Welcome to Enfy, you will find the best events ever here.</Text_One>
                <div>
                    <Button variant="secondary" onClick={()=>{
                        dispatch(enableModal('login'))
                    }}>Login</Button>

                    <Button onClick={()=>{
                        dispatch(enableModal('register'))
                    }}>Join Now</Button>
                </div>
                
            </InfoContainer>
        </LandingLimit>
        </>
    )
}