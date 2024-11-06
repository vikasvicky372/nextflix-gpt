import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
    name: "movies",
    initialState:{
        nowPlayingMovies: null,
        popularMovies: null,
        topratedMovies: null,
        upComingMovies: null,
        trailerId: null,
    },
    reducers: {
        addNowPlayingMovies: (state, action) => {
            state.nowPlayingMovies = action.payload;
        },
        addPopularMovies: (state, action) => {
            state.popularMovies = action.payload;
        },
        addTopratedMovies: (state, action) => {
            state.topratedMovies = action.payload;
        },
        addUpcomingMovies: (state, action) => {
            state.upComingMovies = action.payload;
        },
        addTrailerId: (state,action) => {
            state.trailerId = action.payload;
        }
    },
});


export const {addNowPlayingMovies,addTrailerId, addPopularMovies, addTopratedMovies, addUpcomingMovies} = moviesSlice.actions;

export default moviesSlice.reducer;