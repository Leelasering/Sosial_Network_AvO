import * as axios from "axios";

const instanse = axios.create({

    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "3eed3eab-3253-4cb4-a8c4-bce8687d4c11"
    },

});

export const userAPI = {

    getUsers(currentPage = 1,pageSize = 50){
        return instanse.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => {
                return response.data
            });
    },
    follow(id){
        return instanse.post(`follow/${id}`)
            .then(response => {
                return response.data
            });
    },
    unfollow(id){
        return instanse.delete(`follow/${id}`)
            .then(response => {
                return response.data
            });
    },
    getProfile(id){
        return instanse.get(`profile/${id}`)
            .then(response => {
                return response.data
            });
    },
    getAuthMe(){
        return instanse.get(`auth/me`)
            .then(response => {
                return response.data
            });
    },
}


