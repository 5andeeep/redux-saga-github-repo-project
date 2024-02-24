import { createSlice } from "@reduxjs/toolkit";


export const repoSlice = createSlice({
    name: "repos",
    initialState: {
        repos: [],
        isLoading: false,
    },
    reducers: {
        getRepoFetch: (state) => {
            state.isLoading = true;
        },
        getRepoSuccess: (state, action) => {
            state.repos = action.payload;
            state.isLoading = false;
        },
        getRepoFailure: (state) => {
            state.isLoading = false;
        }
    }
});

export const { getRepoFetch, getRepoSuccess, getRepoFailure } = repoSlice.actions;

export default repoSlice.reducer;
