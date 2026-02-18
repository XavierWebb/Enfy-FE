import { createSlice } from "@reduxjs/toolkit";
import { createUser, loginUser } from "../requests/userRequests";
import type { Events } from "./eventsSlice";

type UserType = {
    id: number,
    name: string,
    role: string,
    email: string,
    createdAt: Date | null,
    profilePicture: string,
    eventsBought: Events[],
    eventsCreated: Events[],
}

type OtherUserType = Omit<UserType, 'email' | 'eventsBought'>

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
        createdAt: null,
        profilePicture: '',
        eventsBought: [],
        eventsCreated: [],
    },
    OtherUser: {
        id: 0,
        name: '',
        role: '',
        createdAt: null,
        profilePicture: '',
        eventsCreated: [],
    },
}

const UsersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {},

    extraReducers: builder => {
        builder
            .addCase(createUser.fulfilled, (state, action) => {
                state.currentUser = action.payload
            })
            .addCase(loginUser.fulfilled, (state, action) => {
                state.currentUser = action.payload
            })

            .addCase(loginUser.rejected, (_state, _action) => {
            })
    }
})

export default UsersSlice.reducer;