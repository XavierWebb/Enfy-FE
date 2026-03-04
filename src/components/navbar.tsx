import styled from "styled-components"
import { Button } from "./button"
import { SearchBar } from "./searchBar"
import { useNavigate } from "react-router"
import { useAppDispatch } from "../redux/hooks"
import { clearSearched, search_content, update_searchStatus } from "../redux/eventsSlice"
import { useSelector } from "react-redux"
import type { RootState } from "../redux/store"
import { ProfileDropDown } from "./profiledropdown"
import { disableModal, enableModal } from "../redux/modalsSlice"
import { LanguagesDrop } from "./languages"

const StyledNavbar = styled.div<{Mode: 'light' | 'dark'}>`
    background-color: ${({Mode}) => Mode === 'light' ? '#ffffff' : '#000000'};
    position: relative;
    display: flex;
    align-items: center;
    width: 100%;
    gap: 1rem;

    @media(max-width: 768px){
        gap: 0.1rem;
        flex-wrap: wrap;
        justify-content: center;
    }
`

const ProfilePicture = styled.img`
    cursor: pointer;
    object-fit: cover;
    object-position: center;
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
    @media(max-width: 768px){
        margin-left: 0;
    }
`

export const NavBar = () => {

    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const Mode = useSelector((state: RootState) => state.users.currentUser.mode)
    const dropdownmenu = useSelector((state: RootState) => state.modals.profileDropDown)
    const languages = useSelector((state: RootState) => state.modals.languages)
    const user = useSelector((state:RootState) => state.users.currentUser)
    let profilePicture = `/userImages/default.webp`

    if (user.profilePicture !== 'default'){
        profilePicture = `http://localhost:8000${user.profilePicture}`
    }
    return (
        <StyledNavbar Mode={Mode}>
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
                    onClick={() => {
                        if(dropdownmenu == true){
                            dispatch(disableModal('profileDropDown'))
                        }
                        if (languages == true){
                            dispatch(disableModal('languages'))
                        } else {
                            dispatch(enableModal('languages'))
                        }
                    }}
                >{`${user.language} < `}</Button>
                <ProfilePicture 
                    src={profilePicture}
                    onClick={()=>{
                        if(languages == true){
                            dispatch(disableModal('languages'))
                        }
                        if ( dropdownmenu == true){
                            dispatch(disableModal('profileDropDown'))
                        } else{
                            dispatch(enableModal('profileDropDown'))
                        }
                    }}
                />
            </RightContainer>
            <ProfileDropDown/>
            <LanguagesDrop/>
        </StyledNavbar>
    )
}