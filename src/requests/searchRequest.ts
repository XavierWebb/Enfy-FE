import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const SearchEvent = createAsyncThunk(
    '/api/search/searchEvent',
    async (data: string, {rejectWithValue}) => {
        try {
          const response = await axios.get(`http://localhost:8000/api/search/searchEvent/${data}`) 

          return response.data;
        } catch (error: any) {
            if (axios.isAxiosError(error) && error.response){
                rejectWithValue('No events Founded')
            }
            return rejectWithValue('Unexpected Error')
        }
    }
);