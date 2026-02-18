import {createSlice} from "@reduxjs/toolkit";

const langSlice = createSlice({
    name : "lang",
    initialState : {
        langState : "en",
    },
    reducers : {
        changeLanguage : (state,action)=>{
            state.langState = action.payload;
        },
    },
});

export const { changeLanguage } = langSlice.actions;

export default langSlice.reducer;