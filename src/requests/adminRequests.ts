import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const ViewBusinessAplications = createAsyncThunk(
    '/api/admin/view_business_aplications',
    async ( _,{ rejectWithValue }) => {
        try {
            const response = await axios.get('http://localhost:8000/api/admin/view_business_aplications', {withCredentials: true})

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
            const response = await axios.post('http://localhost:8000/api/admin/accept_application', {id}, {withCredentials: true})

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
            const response = await axios.post('http://localhost:8000/api/admin/reject_application', {id}, {withCredentials: true})

            return response.data;
        } catch (error) {
            if (axios.isAxiosError(error) && error.response) {
                return rejectWithValue(error.response.data.detail)

            }

            return rejectWithValue('Unexpected Error');
        }
    }
)