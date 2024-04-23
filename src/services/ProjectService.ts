import $api from "@/http/index"

export default class ProjectService {
    static async create(dto: any) {
        return await $api.post("project", dto)
    }

    static async get() {
        return await $api.get(`project?page=1&limit=5`)
    }

    static async getByID() {
        return await $api.get(`project/1`)
    }

    static async update() {
        return await $api.put("project")
    }

    static async delete() {
        return await $api.delete(`project/1`)
    }
}