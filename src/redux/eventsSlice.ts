import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { SearchEvent } from "../requests/searchRequest";

interface Events {
    id: number,
    status: 'active' | 'past' | 'cancelled',
    name: string,
    description: string,
    creationDate: string,
    eventDate: string,
    ubication: string,
    price: number,
    owner_id: number,

}

interface StateProps {
    EventSearched: Events[]
    EventsRecommended: Events[]
    searchStatus: boolean
}

const initialState: StateProps = {
    EventSearched: [],
    EventsRecommended: [],
    searchStatus: false
}


const EventsSlice = createSlice({
    name:'events',
    initialState,
    reducers: {
        update_searchStatus: (state, action: PayloadAction<boolean>) => {
            state.searchStatus = action.payload;
        }
    },
    extraReducers: builder => {
        builder
            .addCase(SearchEvent.fulfilled, (state, action) => {
                state.EventSearched = (action.payload);
                state.searchStatus = true;
            })
            .addCase(SearchEvent.rejected, (state) => {
                state.EventSearched = [];
                state.searchStatus = true;
            })
    }  
})

export default EventsSlice.reducer;
export const { update_searchStatus } = EventsSlice.actions;