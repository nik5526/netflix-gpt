import {createSlice} from "@reduxjs/toolkit";

const searchSlice = createSlice({
    name : "gpt",
    initialState : {
        showGptSearch : false,
    },
    reducers : {
        toogleGptSearchView : (state) =>{
            state.showGptSearch = !state.showGptSearch;
        },
    }
});

export const {toogleGptSearchView} = searchSlice.actions;

export default searchSlice.reducer;