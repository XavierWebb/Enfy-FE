import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { createUser, fetchMe, fetchUser, loginUser } from "../requests/userRequests";
import type { Events } from "./eventsSlice";
import { createEvent } from "../requests/eventsRequest";

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

            .addCase(fetchUser.fulfilled, (state, action: PayloadAction<OtherUserType>) => {
                state.OtherUser = action.payload
            })

            .addCase(fetchMe.fulfilled, (state, action: PayloadAction<UserType>)=> {
                state.currentUser = action.payload
            })

            .addCase(createEvent.fulfilled, (state, action: PayloadAction<Events>) => {
                state.currentUser.eventsCreated.push(action.payload)
            })
    }
})

export default UsersSlice.reducer;