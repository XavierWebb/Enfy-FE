import { createSlice } from "@reduxjs/toolkit";

interface StateInterface {
    register: boolean,
    login: boolean,
}

const initialState:StateInterface = {
    register: false,
    login: false,
}


const ModalSlice = createSlice({
    name: "modals",
    initialState,
    reducers: {},
})

export default ModalSlice.reducer;