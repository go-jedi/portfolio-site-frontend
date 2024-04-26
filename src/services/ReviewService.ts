import $api from '@/http/index';

import {FetchCreateDto, FetchGetDto} from "@/redux/review/types";

export default class ReviewService {
    static async create(dto: FetchCreateDto) {
        return await $api.post("v1/review", dto)
    }

    static async get(dto: FetchGetDto) {
        return await $api.get(`v1/review?page=${dto.page}&limit=${dto.limit}`)
    }

    static async getByID(id: number) {
        return await $api.get(`v1/review/${id}`)
    }

    static async delete(id: number) {
        return await $api.delete(`v1/review/${id}`)
    }
}