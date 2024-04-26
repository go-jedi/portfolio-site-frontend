export type ImageType = {
    id: number;
    project_id: number;
    filename: string;
    created_at: string;
    updated_at: string;
}

export type ProjectType = {
    id: number;
    title: string;
    description: string;
    technology: string;
    created_at: string;
    updated_at: string;
    paths: ImageType[];
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

export interface ProjectSliceState {
    status: Status;
    projects: ProjectType[];
    project: ProjectType;
    params: Params;
}

export type FetchGetDto = {
    page: number;
    limit: number;
}

export type FetchGetResponse = {
    message: string;
    result: ProjectType[];
    params: Params;
}

export type FetchGetByIdResponse = {
    message: string;
    result: ProjectType;
}