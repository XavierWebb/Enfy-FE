import styled from "styled-components"
import { Button } from "./button"
import { SearchBar } from "./searchBar"
import { useNavigate } from "react-router"
import { useAppDispatch } from "../redux/hooks"
import { clearSearched, search_content, update_searchStatus } from "../redux/eventsSlice"

const StyledNavbar = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    gap: 1rem;
`

const ProfilePicture = styled.img`
    cursor: pointer;
    border-radius: 100%;
    border: white 2px solid;
    height: 4rem;
    width: 4rem;
`

const RightContainer = styled.div`
    display: flex;
    align-items: center;
    margin-left: auto;
    margin-right: 2rem;
    gap: 1rem;
`

export const NavBar = () => {

    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    return (
        <StyledNavbar>
            <Button variant="secondary" onClick={()=>{
                navigate('/')
                dispatch(update_searchStatus(false))
                dispatch(clearSearched())
                dispatch(search_content(''))
            }}>Enfy</Button>
            <SearchBar/>
            <RightContainer>
                <Button
                    variant='secondary'
                    onClick={() => { }}
                >{`ENG <`} </Button>
                <ProfilePicture onClick={()=>{
                    navigate('/profile?user=me')
                }}/>
            </RightContainer>
        </StyledNavbar>
    )
}