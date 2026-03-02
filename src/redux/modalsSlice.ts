import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

type ModalsNames = 'register' | 'login' | 'createEvent' | 'buyEvent' | 'profilePicture' | 'profileDropDown' | 'languages'

interface StateInterface {
    register: boolean,
    login: boolean,
    createEvent: boolean,
    buyEvent: boolean,
    profilePicture: boolean,
    profileDropDown: boolean,
    languages: boolean
}

const initialState:StateInterface = {
    register: false,
    login: false,
    createEvent: false,
    buyEvent: false,
    profilePicture: false,
    profileDropDown: false,
    languages: false,
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