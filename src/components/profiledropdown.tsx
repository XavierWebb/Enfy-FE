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

const DropDownMenu = styled.div`
    position: absolute;
    top: 100%;
    right: 0;
    display: flex;
    flex-direction: column;
    gap: 0.25rem;

    border: white 0.1rem solid;
    border-radius: 0.15rem;
`

export const ProfileDropDown = () => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const isActive = useSelector((state: RootState) => state.modals.profileDropDown)

    if (!isActive) {
        return null;
    }
    return (
        <DropDownMenu>
            <Button variant="secondary" onClick={() => {
                navigate('/profile?user=me')
                dispatch(disableModal('profileDropDown'))
            }}>Profile</Button>
            <Button variant="secondary" onClick={() => {
                dispatch(changeMode())
            }}>Change Mode</Button>
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
            }}>Logout</Button>
        </DropDownMenu>
    )
}