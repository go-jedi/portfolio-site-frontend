import {createSlice, PayloadAction} from '@reduxjs/toolkit';

import {DateTime} from "luxon";

import {FetchGetResponse, Params, ReviewSliceState, ReviewType, Status} from "@/redux/review/types"

import {fetchCreate} from "@/redux/review/asyncActions/create"
import {fetchGet} from "@/redux/review/asyncActions/get"

const initialState: ReviewSliceState = {
    status: Status.LOADING as Status,
    reviews: [] as ReviewType[],
    params: {} as Params,
};

const reviewSlice = createSlice({
    name: "review",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchCreate.pending, (state, action) => {
            state.status = Status.LOADING;
        });

        builder.addCase(fetchCreate.fulfilled, (state, action) => {
            state.status = Status.SUCCESS;
        });

        builder.addCase(fetchCreate.rejected, (state, action) => {
            state.status = Status.ERROR;
        });

        builder.addCase(fetchGet.pending, (state) => {
            state.status = Status.LOADING;
            state.reviews = [];
        });

        builder.addCase(fetchGet.fulfilled, (state, action: PayloadAction<FetchGetResponse>) => {
            state.reviews = action.payload.result.filter((e: ReviewType) => {
                e.created_at = DateTime.fromISO(e.created_at).toFormat("dd-MM-yyyy");
                e.updated_at = DateTime.fromISO(e.updated_at).toFormat("dd-MM-yyyy");

                return e;
            });
            state.params = action.payload.params;
            state.status = Status.SUCCESS;
        });

        builder.addCase(fetchGet.rejected, (state) => {
            state.status = Status.ERROR;
            state.reviews = []
        });
    }
});

export default reviewSlice.reducer;