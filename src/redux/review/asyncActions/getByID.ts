import {createAsyncThunk} from '@reduxjs/toolkit';

export const fetchGetByID = createAsyncThunk(
    'review/fetchGetByIdStatus',
    async (dto) => {
        console.log("dto:", dto)
        //     запрос
    },
)