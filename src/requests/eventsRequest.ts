import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


export const fetchEvent = createAsyncThunk(
    '',
    async ( 
        event_id: number,
        {rejectWithValue}
    
    )=>{
        try {

            const response = await axios.get(`http://localhost:8000/api/events/fetchEvent/${event_id}`)

            return response.data;
        } catch (error: any){
            if (axios.isAxiosError(error)){
                rejectWithValue('Event not founded')
            }

            rejectWithValue('Unexpected Error')
        }
    }
)