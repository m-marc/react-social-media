import axios from "axios"
import {apiKey} from "./api-key";

const settings = {
    withCredentials: true,
    headers: {
        'API-KEY': apiKey.KEY
    }
}

const instance = axios.create({
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    ...settings
})

export const API = {
    getUsers(page: number, usersPerPage: number) {
        return instance.get(`users/?page=${page}&count=${usersPerPage}`).then(r => r.data)
    },
    followUser(userId: number) {
        return instance.post(`follow/${userId}`).then(r => r.data)
    },
    unFollowUser(userId: number) {
        return instance.delete(`follow/${userId}`).then(r => r.data)
    },
    getUserData(userId: string | number) {
        return instance.get(`profile/${userId}`)
    },
    authMe() {
        return instance.get(`auth/me`).then(r => r.data)
    }
}