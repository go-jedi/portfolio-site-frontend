export type Review = {
    id: number;
    username: string;
    message: string;
    rating: number;
    created_at: string;
    updated_at: string;
}

export enum Status {
    LOADING = 'loading',
    SUCCESS = 'completed',
    ERROR = 'error',
}

export interface ReviewSliceState {
    reviews: Review[];
    status: Status;
}

export type FetchCreateDto = {
    username: string;
    message: string;
    rating: number;
}

export type FetchCreateResponse = {
    message: string;
    result: number;
}

export type FetchGetDto = {
    page: number;
    limit: number;
}

export type FetchGetResponse = {
    message: string;
    result: Review[];
}