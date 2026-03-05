import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { ViewBusinessAplications } from "../requests/adminRequests";


type Aplication = {
    id: number,
    status: string,
    user_id: number,
    name: string,
    contact: string,
    theme: string,
}

interface StateProps {
    aplications: Aplication[]
}

const initialState: StateProps = {
    aplications: []
}

const AdminSlice = createSlice({
    name: 'Admin',
    initialState,
    reducers: {
        clearAplications: (state) => {
            state.aplications = []
        }
    },
    extraReducers: builder => {
        builder
            .addCase(ViewBusinessAplications.fulfilled, (state, action: PayloadAction<Aplication[]>)=> {
                state.aplications = action.payload
            })
    }
})

export default AdminSlice.reducer;
export const { clearAplications} = AdminSlice.actions;