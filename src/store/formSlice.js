import { createSlice } from "@reduxjs/toolkit";


export const formSlice = createSlice({
    name: 'form',
    initialState: {
        emailExist: null,
        isSend: false,
        answers: {},
    },
    reducers: {
        setIsSend : ( state ) => {
            state.isSend = true;
        },
        setAnswers : ( state, action ) => {
            state.answers = action.payload;
            state.isSend = true;
        },
        setEmailExist : (state) => {
            state.emailExist = state;
        }
        
    }
});


export const { setIsSend, setAnswers, setEmailExist } = formSlice.actions;