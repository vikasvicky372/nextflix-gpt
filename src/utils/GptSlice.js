import { createSlice } from "@reduxjs/toolkit";

const GptSlice = createSlice({
    name: "GptSearch",
    initialState: {
        showGptSearch: false
    },
    reducers:{
        toggleGptSearch: (state) => {
            state.showGptSearch = !state.showGptSearch;
        }
    }
});


export const {toggleGptSearch} = GptSlice.actions;

export default GptSlice.reducer;