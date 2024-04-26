import {createAsyncThunk} from '@reduxjs/toolkit';

import {FetchGetByIdResponse} from "@/redux/project/types";

import projectService from "@/services/ProjectService";

export const fetchGetByID = createAsyncThunk<FetchGetByIdResponse, number>(
    "project/fetchGetByIdStatus",
    async (id: number) => {
        const response = await projectService.getByID(id);
        return response.data;
    }
)