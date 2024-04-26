export type ReviewType = {
    id: number;
    username: string;
    message: string;
    rating: number;
    created_at: string;
    updated_at: string;
}

export type Params = {
    page_count: number;
    limit: number;
}

export enum Status {
    LOADING = 'loading',
    SUCCESS = 'completed',
    ERROR = 'error',
}

export interface ReviewSliceState {
    status: Status;
    reviews: ReviewType[];
    params: Params;
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
    result: ReviewType[];
    params: Params;
}