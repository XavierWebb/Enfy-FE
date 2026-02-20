import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchEvent = createAsyncThunk(
    '/api/events/fetchEvent',
    async ( 
        event_id: number,
        {rejectWithValue}
    
    )=>{
        try {

            const response = await axios.get(`http://localhost:8000/api/events/fetchEvent/${event_id}`, {
                withCredentials: true
            })

            return response.data;
        } catch (error: any){
            if (axios.isAxiosError(error)){
                rejectWithValue('Event not founded')
            }

            rejectWithValue('Unexpected Error')
        }
    }
)

export const createEvent = createAsyncThunk(
    '/api/events/createEvent',
    async (data: {
            name: string,
            description: string,
            price: number,
            eventDate: Date,
    }, {rejectWithValue}) => {
        try {

            const response = await axios.post(`http://localhost:8000/api/events/createEvent`, data, {
                withCredentials: true
            })

            return response.data;

        } catch (error) {
            if (axios.isAxiosError(error) && error.response){
                return rejectWithValue(`Error: ${error.response.data.detail}`)
            }

            rejectWithValue('Unexpected Error')
        }
    }
)