import {createAsyncThunk} from '@reduxjs/toolkit';

import {FetchGetDto, FetchGetResponse} from "@/redux/project/types";

import projectService from "@/services/ProjectService";

export const fetchGet = createAsyncThunk<FetchGetResponse, FetchGetDto>(
    "project/fetchGetStatus",
    async (dto: FetchGetDto) => {
        const response = await projectService.get(dto);
        return response.data;
    }
)