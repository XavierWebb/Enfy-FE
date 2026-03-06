import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import type { FormProps } from "../modals/createEventsModal";

const BE_URL = import.meta.env.VITE_BE_URL

export const fetchEvent = createAsyncThunk(
    '/api/events/fetchEvent',
    async (
        event_id: number,
        { rejectWithValue }

    ) => {
        try {

            const response = await axios.get(`${BE_URL}/api/events/fetchEvent/${event_id}`, {
                withCredentials: true
            })

            return response.data;
        } catch (error: any) {
            if (axios.isAxiosError(error)) {
                rejectWithValue('Event not founded')
            }

            rejectWithValue('Unexpected Error')
        }
    }
)

export const createEvent = createAsyncThunk(
    '/api/events/createEvent',
    async (data: FormProps, { rejectWithValue }) => {
        try {
            const response = await axios.post(`${BE_URL}/api/events/createEvent`, data, {
                withCredentials: true
            })

            return response.data;

        } catch (error) {
            if (axios.isAxiosError(error) && error.response) {
                return rejectWithValue(`Error: ${error.response.data.detail}`)
            }

            rejectWithValue('Unexpected Error')
        }
    }
)

export const BuyEvent = createAsyncThunk(
    '/api/events/buyEvent',
    async (data: {
        id: number,
        master_card: number,
        security_number: number
    }, { rejectWithValue }) => {
        try {

            const response = await axios.post(`${BE_URL}/api/events/buyEvent`, data, {
                withCredentials: true
            })

            return response.data;
        } catch (error) {
            if (axios.isAxiosError(error) && error.response) {
                return rejectWithValue(`Error: ${error.response.data.detail}`)
            }

            rejectWithValue('Unexpected Error')
        }
    }
)

export const fetchRecommendedEvents = createAsyncThunk(
    '/api/events/fetchRecommendedEvents',
    async (_, { rejectWithValue }) => {
        try {

            const response = await axios.get(`${BE_URL}/api/events/fetchRecommendedEvents`, {
                withCredentials: true
            });

            return response.data;
        } catch (error) {
            if (axios.isAxiosError(error) && error.response) {
                return rejectWithValue(`Error: ${error.response.data.detail}`)
            }

            rejectWithValue('Unexpected Error')
        }
    }
)