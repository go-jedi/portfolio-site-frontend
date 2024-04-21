import {createAsyncThunk} from '@reduxjs/toolkit';

export const fetchDelete = createAsyncThunk(
    'review/fetchDeleteStatus',
    async (params) => {
        console.log("params:", params)
        //     запрос
    },
)