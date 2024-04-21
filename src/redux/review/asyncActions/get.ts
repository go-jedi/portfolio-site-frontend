import {createAsyncThunk} from '@reduxjs/toolkit';

import {FetchGetDto, FetchGetResponse,} from "@/redux/review/types";

import reviewService from "@/services/ReviewService"

export const fetchGet = createAsyncThunk<FetchGetResponse, FetchGetDto>(
    'review/fetchGetStatus',
    async (dto: FetchGetDto) => {
        const response = await reviewService.get(dto)
        return response.data
    },
)