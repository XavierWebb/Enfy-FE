import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


export const fetchUser = createAsyncThunk(
    '/api/users/fetchUser',
    async (id: number, { rejectWithValue }) => {
        try {
            const response = await axios.get(`${import.meta.env.VITE_BE_URL}/api/users/fetchUser/${id}`, {
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
    async (_, {rejectWithValue}) => {
        try {
            const response = await axios.get(`${import.meta.env.VITE_BE_URL}/api/users/fetchMe`, {
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
        categories: string[],
    }, { rejectWithValue }) => {
        try {
            const response = await axios.post(`${import.meta.env.VITE_BE_URL}/api/users/createUser`, data, {
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
            const response = await axios.post(`${import.meta.env.VITE_BE_URL}/api/users/loginUser`, data, {
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

export const UpdateProfilePicture = createAsyncThunk(
    '/api/users/updatePicture',
    async (image: File, {rejectWithValue}) => {
        try {
            const formData = new FormData();

            formData.append('image', image);

            const response = await axios.post(`${import.meta.env.VITE_BE_URL}/api/users/updatePicture`, formData, {
                withCredentials: true
            })
            
            return response.data
        } catch(error) {
            if (axios.isAxiosError(error) && error.response) {
                return rejectWithValue(error.response.data.detail);
            };

            return rejectWithValue('Unexpected Error');
        }
    }
)

export const Logout = createAsyncThunk(
    '/api/users/logout',
    async(_, {rejectWithValue}) => {
        try {
            const response = await axios.post(`${import.meta.env.VITE_BE_URL}/api/users/logout`, {},{
                withCredentials: true
            })

            return response.data
        } catch (error) {
            if (axios.isAxiosError(error) && error.response) {
                return rejectWithValue(error.response.data.detail);
            };

            return rejectWithValue('Unexpected Error');
        }
    }
)

export const BusinessAplication = createAsyncThunk(
    '/api/users/business_aplication',
    async(data:{
        name: string,
        contact: string,
        theme: string,
    }, {rejectWithValue}) => {
        try{
            const response = await axios.post(`${import.meta.env.VITE_BE_URL}/api/users/business_aplication`, data, {
                withCredentials: true
            })

            return response.data
        } catch (error) {
            if (axios.isAxiosError(error) && error.response){
                return rejectWithValue(error.response.data.detail);
            };
            
            return rejectWithValue('Unexpected Error');
        }
    }
)