import $api from '@/http/index';

import {FetchCreateDto, FetchGetDto} from "@/redux/review/types";

export default class ReviewService {
    static async create(dto: FetchCreateDto) {
        return await $api.post("review", dto)
    }

    static async get(dto: FetchGetDto) {
        return await $api.get(`review?page=${dto.page}&limit=${dto.limit}`)
    }

    static async getByID(id: number) {
        return await $api.get(`review/${id}`)
    }

    static async delete(id: number) {
        return await $api.delete(`review/${id}`)
    }
}