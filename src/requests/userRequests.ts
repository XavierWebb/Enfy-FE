import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


export const createUser = createAsyncThunk(
    '/api/users/createUser',
    async (data: {
        name: string,
        email: string,
        password: string,
    }, {rejectWithValue}) => {
        try{
            const response = await axios.post('http://localhost:8000/api/users/createUser', data)

            return response.data
        } catch (error: any){
            if (axios.isAxiosError(error) && error.response){
                return rejectWithValue(error.response.data.detail)

            }

            return rejectWithValue('Unexpected Error');
        }
    }
)