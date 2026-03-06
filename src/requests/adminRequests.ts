import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const BE_URL = import.meta.env.VITE_BE_URL
console.log(BE_URL)

export const ViewBusinessAplications = createAsyncThunk(
    '/api/admin/view_business_aplications',
    async ( _,{ rejectWithValue }) => {
        try {
            const response = await axios.get(`${BE_URL}/api/admin/view_business_aplications`, {withCredentials: true})

            return response.data;
        } catch (error) {
            if (axios.isAxiosError(error) && error.response) {
                return rejectWithValue(error.response.data.detail)

            }

            return rejectWithValue('Unexpected Error');
        }
    }
)

export const AcceptAplication = createAsyncThunk(
    '/api/admin/AcceptAplication',
    async ( id: number,{ rejectWithValue }) => {
        try {
            const response = await axios.post(`${BE_URL}/api/admin/accept_application`, {id}, {withCredentials: true})

            return response.data;
        } catch (error) {
            if (axios.isAxiosError(error) && error.response) {
                return rejectWithValue(error.response.data.detail)

            }

            return rejectWithValue('Unexpected Error');
        }
    }
)

export const RejectAplication = createAsyncThunk(
    '/api/admin/RejectAplication',
    async ( id: number,{ rejectWithValue }) => {
        try {
            const response = await axios.post(`${BE_URL}/api/admin/reject_application`, {id}, {withCredentials: true})

            return response.data;
        } catch (error) {
            if (axios.isAxiosError(error) && error.response) {
                return rejectWithValue(error.response.data.detail)

            }

            return rejectWithValue('Unexpected Error');
        }
    }
)