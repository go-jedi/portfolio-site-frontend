import {createAsyncThunk} from '@reduxjs/toolkit';

export const fetchGetByID = createAsyncThunk(
    'review/fetchGetByIdStatus',
    async (params) => {
        console.log("params:", params)
        //     запрос
    },
)