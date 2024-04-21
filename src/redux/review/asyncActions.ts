import {createAsyncThunk} from '@reduxjs/toolkit';

import {FetchCreateDto, FetchCreateResponse, FetchGetDto, FetchGetResponse,} from "@/redux/review/types";

import reviewService from "@/services/ReviewService"

export const fetchCreate = createAsyncThunk<FetchCreateResponse, FetchCreateDto>(
    'review/fetchCreateStatus',
    async (dto: FetchCreateDto) => {
        const response = await reviewService.create(dto)
        return response.data
    },
)

export const fetchGet = createAsyncThunk<FetchGetResponse, FetchGetDto>(
    'review/fetchGetStatus',
    async (dto: FetchGetDto) => {
        const response = await reviewService.get(dto)
        return response.data
    },
)

export const fetchGetByID = createAsyncThunk(
    'review/fetchGetByIdStatus',
    async (params) => {
        console.log("params:", params)
        //     запрос
    },
)

export const fetchDelete = createAsyncThunk(
    'review/fetchDeleteStatus',
    async (params) => {
        console.log("params:", params)
        //     запрос
    },
)