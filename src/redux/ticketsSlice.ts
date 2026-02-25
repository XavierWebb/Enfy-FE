import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { fetchTickets } from "../requests/ticketsRequest";

type Ticket = {
    id: number,
    status: string
    event_id: number,
    user_id: number,
}

interface initialProps {
    tickets: Ticket[]
}

const initialState: initialProps = {
    tickets: [],
}


const Tickets = createSlice({
    name: 'tickets',
    initialState,
    reducers: {},

    extraReducers: builder => {
        builder
            .addCase(fetchTickets.fulfilled, (state, action) => {
                state.tickets = action.payload
            })
    }
});

export default Tickets.reducer;