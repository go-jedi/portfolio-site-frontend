import {createSlice} from '@reduxjs/toolkit';

import {ReviewSliceState, Status} from "@/redux/review/types"

import {fetchCreate, fetchGet} from "@/redux/review/asyncActions"

const initialState: ReviewSliceState = {
    reviews: [],
    status: Status.LOADING,
};

const reviewSlice = createSlice({
    name: "review",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchCreate.pending, (state, action) => {
            state.status = Status.LOADING;
            // state.items = [];
        });

        builder.addCase(fetchCreate.fulfilled, (state, action) => {
            // state.items = action.payload;
            state.status = Status.SUCCESS;
        });

        builder.addCase(fetchCreate.rejected, (state, action) => {
            state.status = Status.ERROR;
            // state.items = [];
        });

        builder.addCase(fetchGet.pending, (state) => {
            state.status = Status.LOADING;
            state.reviews = [];
        });

        builder.addCase(fetchGet.fulfilled, (state, action) => {
            state.reviews = action.payload.result
            state.status = Status.SUCCESS;
        });

        builder.addCase(fetchGet.rejected, (state) => {
            state.status = Status.ERROR;
            state.reviews = []
        });
    }
});

export default reviewSlice.reducer;