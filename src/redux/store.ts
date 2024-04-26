import {configureStore} from '@reduxjs/toolkit';
import type {TypedUseSelectorHook} from 'react-redux';
import {useDispatch, useSelector} from 'react-redux';

import review from "@/redux/review/slice"
import project from "@/redux/project/slice";

export const store = configureStore({
    reducer: {
        review,
        project,
    },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;