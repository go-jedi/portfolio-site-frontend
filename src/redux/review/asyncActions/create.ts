import {createAsyncThunk} from '@reduxjs/toolkit';

import {FetchCreateDto, FetchCreateResponse,} from "@/redux/review/types";

import reviewService from "@/services/ReviewService"

export const fetchCreate = createAsyncThunk<FetchCreateResponse, FetchCreateDto>(
    'review/fetchCreateStatus',
    async (dto: FetchCreateDto) => {
        const response = await reviewService.create(dto)
        return response.data
    },
)