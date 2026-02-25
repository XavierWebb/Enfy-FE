import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


export const fetchTickets = createAsyncThunk(
    '/api/tickets/fetch_my_tickets',
    async (event_id: number, { rejectWithValue }) => {
        try {
            const response = await axios.get(`http://localhost:8000/api/tickets/fetchMyTickets/${event_id}`, {
                withCredentials: true
            })

            return response.data;
        } catch (error) {
            if (axios.isAxiosError(error) && error.response) {
                rejectWithValue(error.message)
            }
            return rejectWithValue('Unexpected Error')
        }
    }
)