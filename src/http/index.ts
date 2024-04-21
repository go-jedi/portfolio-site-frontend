import axios, {AxiosInstance} from 'axios';

export const API_URL: string = `${process.env.NEXT_PUBLIC_API_URL}`;

const $api: AxiosInstance = axios.create({
    baseURL: API_URL,
});

// $api.interceptors.request.use();

// $api.interceptors.response.use()

export default $api;