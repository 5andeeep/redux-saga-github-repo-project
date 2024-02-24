import { createSlice } from "@reduxjs/toolkit";

export const commitsSlice = createSlice({
    name: "commits",
    initialState: {
        commits: [],
        isLoading: false,
    },
    reducers: {
        getCommitsFetch: (state) => {
            state.isLoading = true;
        },
        getCommitsSuccess: (state, action) => {
            state.repos = action.payload;
            state.isLoading = false;
        },
        getCommitsFailure: (state) => {
            state.isLoading = false;
        }
    }
});

export const { getCommitsFetch, getCommitsSuccess, getCommitsFailure } = commitsSlice.actions;

export default commitsSlice.reducer;