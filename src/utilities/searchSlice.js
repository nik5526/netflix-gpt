import {createSlice} from "@reduxjs/toolkit";

const searchSlice = createSlice({
    name : "gpt",
    initialState : {
        showGptSearch : false,
        movieNames : null,
        movieResults : null,
    },
    reducers : {
        toogleGptSearchView : (state) =>{
            state.showGptSearch = !state.showGptSearch;
        },

        // here we will learn how to give more than one inputs in the single reducer
        addGptMoviesResults : (state,action) =>{
            const {movieNames , movieResults} = action.payload;
            state.movieNames = movieNames;
            state.movieResults = movieResults;
        }
    }
});

export const {toogleGptSearchView,addGptMoviesResults} = searchSlice.actions;

export default searchSlice.reducer;