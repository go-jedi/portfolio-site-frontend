import {createSlice, PayloadAction} from '@reduxjs/toolkit';

import {DateTime} from "luxon";

import {
    FetchGetByIdResponse,
    FetchGetResponse,
    Params,
    ProjectSliceState,
    ProjectType,
    Status
} from "@/redux/project/types";

import {fetchGet} from "@/redux/project/asyncActions/get";
import {fetchGetByID} from "@/redux/project/asyncActions/getByID";

const initialState: ProjectSliceState = {
    status: Status.LOADING as Status,
    projects: [] as ProjectType[],
    project: {} as ProjectType,
    params: {} as Params,
};

const projectSlice = createSlice({
    name: "project",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchGet.pending, (state) => {
            state.status = Status.LOADING;
            state.projects = [];
        })

        builder.addCase(fetchGet.fulfilled, (state, action: PayloadAction<FetchGetResponse>) => {
            console.log("action.payload:", action.payload)
            state.projects = action.payload.result.filter((e: ProjectType) => {
                e.created_at = DateTime.fromISO(e.created_at).toFormat("dd-MM-yyyy HH:mm");
                e.updated_at = DateTime.fromISO(e.updated_at).toFormat("dd-MM-yyyy HH:mm");

                return e;
            });
            state.params = action.payload.params;
            state.status = Status.SUCCESS;
        })

        builder.addCase(fetchGet.rejected, (state) => {
            state.status = Status.ERROR;
            state.projects = [];
        })

        builder.addCase(fetchGetByID.pending, (state) => {
            state.status = Status.LOADING;
            state.project = {} as ProjectType;
        })

        builder.addCase(fetchGetByID.fulfilled, (state, action: PayloadAction<FetchGetByIdResponse>) => {
            console.log("action.payload:", action.payload);
            state.project = action.payload.result;
            state.project.created_at = DateTime.fromISO(state.project.created_at).toFormat("dd-MM-yyyy HH:mm");
            state.project.updated_at = DateTime.fromISO(state.project.updated_at).toFormat("dd-MM-yyyy HH:mm");
            state.status = Status.SUCCESS;
        })

        builder.addCase(fetchGetByID.rejected, (state) => {
            state.status = Status.ERROR;
            state.project = {} as ProjectType;
        })
    },
})

export default projectSlice.reducer;