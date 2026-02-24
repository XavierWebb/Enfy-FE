import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

type ModalsNames = 'register' | 'login' | 'createEvent' | 'buyEvent'

interface StateInterface {
    register: boolean,
    login: boolean,
    createEvent: boolean,
    buyEvent: boolean
}

const initialState:StateInterface = {
    register: false,
    login: false,
    createEvent: false,
    buyEvent: false,
}


const ModalSlice = createSlice({
    name: "modals",
    initialState,
    reducers: {
        enableModal: (state, action: PayloadAction<ModalsNames>)=> {
            state[action.payload] = true;
        },

        disableModal: (state, action: PayloadAction<ModalsNames>)=>{
            state[action.payload] = false;
        }
    },
})

export default ModalSlice.reducer;
export const {enableModal, disableModal} = ModalSlice.actions