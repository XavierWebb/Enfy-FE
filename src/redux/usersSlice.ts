import { createSlice } from "@reduxjs/toolkit";
import { createUser, loginUser } from "../requests/userRequests";

type UserType = {
    id: number,
    name: string,
    email: string,
    createdAt: Date | null,
}

interface StateProps {
    currentUser: UserType
    OtherUsers: UserType[]
}

const initialState: StateProps = {
    currentUser: {
        id: 0,
        name: '',
        email: '',
        createdAt: null,
    },
    OtherUsers: []
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
    }
})

export default UsersSlice.reducer;