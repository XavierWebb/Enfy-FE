import styled from "styled-components"
import { Button } from "./button"
import { useAppDispatch } from "../redux/hooks"
import { changeMode } from "../redux/usersSlice"
import { useNavigate } from "react-router"
import { useSelector } from "react-redux"
import type { RootState } from "../redux/store"
import { disableModal } from "../redux/modalsSlice"
import { Logout } from "../requests/userRequests"
import { unwrapResult } from "@reduxjs/toolkit"
import { toast } from "react-toastify"
import { useTranslation } from "react-i18next"

const DropDownMenu = styled.div<{Mode: 'light' | 'dark'}>`
    position: absolute;
    top: 100%;
    right: 0;
    display: flex;
    flex-direction: column;
    gap: 0.25rem;

    border: ${({Mode}) => Mode === 'light' ? '#282828': 'white'} 0.1rem solid;
    background-color: ${({Mode}) => Mode === 'light' ? 'white': '#131313'};
    border-radius: 0.15rem;
`

export const ProfileDropDown = () => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const isActive = useSelector((state: RootState) => state.modals.profileDropDown)
    const Mode = useSelector((state: RootState) => state.users.currentUser.mode);
    const {t} = useTranslation()
    if (!isActive) {
        return null;
    }
    return (
        <DropDownMenu Mode={Mode}>
            <Button variant="secondary" onClick={() => {
                navigate('/profile?user=me')
                dispatch(disableModal('profileDropDown'))
            }}>{t('dropdownmenu.profile')}</Button>
            <Button variant="secondary" onClick={() => {
                dispatch(changeMode())
            }}>{t('dropdownmenu.changeMode')}</Button>
            <Button variant="secondary" onClick={async () => {
                try {
                    await dispatch(Logout()).then(unwrapResult)
                    localStorage.clear()
                    toast.success('Successful logout')
                    dispatch(disableModal('profileDropDown'))
                    window.location.reload()                    
                } catch (err: any) {
                    toast.error(err)
                }
            }}>{t('dropdownmenu.logout')}</Button>
        </DropDownMenu>
    )
}