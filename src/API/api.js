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
}

export const profileAPI = {

    getProfile(id){
        return instanse.get(`profile/${id}`)
            .then(response => {
                return response.data
            });
    },
    getProfileStatus(id){
        return instanse.get(`profile/status/${id}`)
            .then(response => {
                return response.data
            });
    },
    updateProfileStatus(status){
        return instanse.put(`profile/status`,{status: status})
            .then(response => {
                return response.data
            });
    },
}

export const authAPI = {
    getAuthMe(){
        return instanse.get(`auth/me`)
            .then(response => {
                return response.data
            });
    },
    login(email,password,rememberMe = false){
        return instanse.post(`auth/login`,{email,password,rememberMe})
           //  .then(response => {
           //    return response.data
           //                  });
    },
    logout(){
        return instanse.delete(`auth/login`)
         //   .then(response => {
         //       return response.data
         //   });
    },
}