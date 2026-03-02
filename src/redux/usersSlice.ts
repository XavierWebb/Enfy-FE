import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { createUser, fetchMe, fetchUser, loginUser } from "../requests/userRequests";
import type { Events } from "./eventsSlice";
import { createEvent } from "../requests/eventsRequest";

type languageType = 'en' | 'es' | 'ru' | 'ar' | 'de'

type UserType = {
    id: number,
    name: string,
    role: string,
    email: string,
    createdAt: string,
    profilePicture: string,
    eventsBought: Events[],
    eventsCreated: Events[],
    mode: 'light' | 'dark',
    language: languageType,
}

type OtherUserType = Omit<UserType, 'email' | 'eventsBought' | 'mode' | 'language'>

interface StateProps {
    currentUser: UserType
    OtherUser: OtherUserType
}

const initialState: StateProps = {
    currentUser: {
        id: 0,
        name: '',
        role: '',
        email: '',
        createdAt: '',
        profilePicture: '',
        eventsBought: [],
        eventsCreated: [],
        mode: 'dark',
        language: 'en'
    },
    OtherUser: {
        id: 0,
        name: '',
        role: '',
        createdAt: '',
        profilePicture: '',
        eventsCreated: [],
    },
}

const UsersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        changeMode: (state) => {
            state.currentUser.mode = state.currentUser.mode === 'light' ? 'dark' : 'light'
        },
        changeLanguageRedux: (state, action: PayloadAction<languageType>) => {
            state.currentUser.language = action.payload
        }
    },

    extraReducers: builder => {
        builder
            .addCase(createUser.fulfilled, (state, action) => {
                state.currentUser = {
                    ...state.currentUser,
                    ...action.payload
                }
            })
            .addCase(loginUser.fulfilled, (state, action) => {
                state.currentUser = {
                    ...state.currentUser,
                    ...action.payload
                }
            })

            .addCase(loginUser.rejected, (_state, _action) => {
            })

            .addCase(fetchUser.fulfilled, (state, action: PayloadAction<OtherUserType>) => {
                state.OtherUser = action.payload
            })

            .addCase(fetchMe.fulfilled, (state, action)=> {
                state.currentUser = {
                    ...state.currentUser,
                    ...action.payload
                }
            })

            .addCase(createEvent.fulfilled, (state, action: PayloadAction<Events>) => {
                state.currentUser.eventsCreated.push(action.payload)
            })
    }
})

export default UsersSlice.reducer;
export const { changeMode, changeLanguageRedux } = UsersSlice.actions