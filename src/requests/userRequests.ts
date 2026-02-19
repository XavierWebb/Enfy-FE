import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


export const fetchUser = createAsyncThunk(
    '/api/users/fetchUser',
    async (id: number, { rejectWithValue }) => {
        try {
            const response = await axios.get(`http://localhost:8000/api/users/fetchUser/${id}`, {
                withCredentials: true
            })

            return response.data
        } catch (error) {
            if (axios.isAxiosError(error) && error.response) {
                return rejectWithValue(error.response.data.detail)

            }

            return rejectWithValue('Unexpected Error');
        }
    }
)

export const fetchMe = createAsyncThunk(
    '/api/users/fetchMe',
    async ({},{rejectWithValue}) => {
        try {
            const response = await axios.get(`http://localhost:8000/api/users/fetchMe`, {
                withCredentials: true
            })

            return response.data
        } catch (error) {
            if (axios.isAxiosError(error) && error.response) {
                return rejectWithValue(error.response.data.detail)

            }

            return rejectWithValue('Unexpected Error');
        }
    }
)

export const createUser = createAsyncThunk(
    '/api/users/createUser',
    async (data: {
        name: string,
        email: string,
        password: string,
    }, { rejectWithValue }) => {
        try {
            const response = await axios.post('http://localhost:8000/api/users/createUser', data, {
                withCredentials: true
            })

            return response.data
        } catch (error: any) {
            if (axios.isAxiosError(error) && error.response) {
                return rejectWithValue(error.response.data.detail)

            }

            return rejectWithValue('Unexpected Error');
        }
    }
)

export const loginUser = createAsyncThunk(
    '/api/users/loginUser',
    async (data: {
        email: string,
        password: string,
    }, { rejectWithValue }) => {
        try {
            const response = await axios.post('http://localhost:8000/api/users/loginUser', data, {
                withCredentials: true
            })

            return response.data;
        } catch (error: any) {
            if (axios.isAxiosError(error) && error.response) {
                return rejectWithValue(error.response.data.detail);
            };

            return rejectWithValue('Unexpected Error');
        }
    }
)