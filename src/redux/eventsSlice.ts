import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { SearchEvent } from "../requests/searchRequest";
import { fetchEvent } from "../requests/eventsRequest";

export interface Events {
    id: number,
    status: 'active' | 'finished' | 'cancelled',
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
    EventView: Events;
    searchStatus: boolean
    searched: string
}

const initialState: StateProps = {
    EventSearched: [],
    EventsRecommended: [],
    EventView: {
        id: 0,
        status: 'active',
        name: '',
        description: '',
        creationDate: '',
        eventDate: '',
        ubication: '',
        price: 0,
        owner_id: 0,

    },
    searched: '',
    searchStatus: false
}


const EventsSlice = createSlice({
    name: 'events',
    initialState,
    reducers: {
        update_searchStatus: (state, action: PayloadAction<boolean>) => {
            state.searchStatus = action.payload;
        },

        clearSearched: (state) => {
            state.EventSearched = [];
        },

        search_content: (state, action: PayloadAction<string>) => {
            state.searched = action.payload
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

            .addCase(fetchEvent.fulfilled, (state, action: PayloadAction<Events>) => {
                state.EventView = action.payload
            })
    }
})

export default EventsSlice.reducer;
export const { update_searchStatus, clearSearched, search_content} = EventsSlice.actions;