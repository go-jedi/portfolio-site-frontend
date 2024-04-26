import $api from "@/http/index";

import {FetchGetDto} from "@/redux/project/types";

export default class ProjectService {
    static async get(dto: FetchGetDto) {
        return await $api.get(`v1/project?page=${dto.page}&limit=${dto.limit}`)
    }

    static async getByID(id: number) {
        return await $api.get(`v1/project/${id}`)
    }
}