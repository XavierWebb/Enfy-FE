import { useSelector } from "react-redux"
import type { RootState } from "../redux/store"
import styled from "styled-components"
import { Button } from "./button"
import { useTranslation } from "react-i18next"
import { useAppDispatch } from "../redux/hooks"
import { disableModal } from "../redux/modalsSlice"
import { changeLanguageRedux } from "../redux/usersSlice"

const DropDownMenu = styled.div<{Mode: 'light' | 'dark'}>`
    position: absolute;
    top: 100%;
    right: 6.5%;
    display: flex;
    flex-direction: column;
    gap: 0.25rem;

    border: ${({Mode}) => Mode === 'light' ? '#282828': 'white'} 0.1rem solid;
    background-color: ${({Mode}) => Mode === 'light' ? 'white': '#131313'};
    border-radius: 0.15rem;
`

export const LanguagesDrop = () => {
    const Mode = useSelector((state: RootState) => state.users.currentUser.mode)
    const {i18n} = useTranslation();
    const dropped = useSelector((state: RootState) => state.modals.languages);
    const dispatch = useAppDispatch();

    if (!dropped){
        return null;
    };

    return (
        <DropDownMenu Mode={Mode}>
            <Button variant="secondary" onClick={() => {
                i18n.changeLanguage('en')
                dispatch(changeLanguageRedux('en'))
            }}>EN</Button>

            <Button variant="secondary" onClick={() => {
                i18n.changeLanguage('es')
                dispatch(changeLanguageRedux('es'))
            }}>ES</Button>

            <Button variant="secondary" onClick={() => {
                i18n.changeLanguage('ru')
                dispatch(changeLanguageRedux('ru'))
            }}>RU</Button>

            <Button variant="secondary" onClick={() => {
                i18n.changeLanguage('de')
                dispatch(changeLanguageRedux('de'))

            }}>DE</Button>

            <Button variant="secondary" onClick={() => {
                i18n.changeLanguage('ar')
                dispatch(changeLanguageRedux('ar'))
            }}>AR</Button>
        </DropDownMenu>
    )
}