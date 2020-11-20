import {authAPI,profileAPI} from "../API/api";
import {setUserProfile} from "./Profile_reducer";
import {stopSubmit} from "redux-form";

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USER_DATA = 'SET_USER_DATA';

let initialState = {
        userId: null,
        email: null,
        login: null,
        isAuth: false

}
// [{id: '13', name: 'Andrey Mohortov', city: 'Kharkiv',followed: true, ava:'/static/media/tree.c6f60dad.png',status: ''},
//     {id: '14', name: 'Igor Chebotar', city: 'Moscow',followed: false, ava:'/static/media/tree.c6f60dad.png',status: ''},
//     {id: '15', name: 'Maxim Smolentsev', city: 'Kiev',followed: true, ava:'/static/media/tree.c6f60dad.png',status: ''},
//     {id: '28', name: 'Artem Arti-Fix', city: 'London',followed: false, ava:'/static/media/tree.c6f60dad.png',status: ''},
//     {id: '29', name: 'Nikolay Agafonov', city: 'LA',followed: false, ava:'/static/media/tree.c6f60dad.png',status: ''},
//     {id: '30', name: 'Egor Greenenko', city: 'New York',followed: true, ava:'/static/media/tree.c6f60dad.png',status: ''},
// ]
const authReducer = (state = initialState, action) =>
{
    switch (action.type) {
        case SET_USER_DATA: {
            return {
                ...state,
                ...action.payload,

                }
        }

        default:
        {
            return {
                ...state,
            };
        }
    }

}

export const setAuthUserData = (userId,email,login, isAuth) => ({type: SET_USER_DATA, payload : {userId,email,login,isAuth}})

export const getAuthMeThunkCreator = () => (dispatch) => {

       return authAPI.getAuthMe()
            .then(data => {
            if (data.resultCode == 0) {
                let {id, email, login} = data.data

                dispatch(setAuthUserData(id, email, login, true))
                profileAPI.getProfile(id).then(data => {
                    //   this.props.toggleIsFetching(false);

                    dispatch(setUserProfile(data));

                });
            }
        });

    return "sddsg";
}
export const loginThunkCreator = (email, password , rememberMe) => {
    return (dispatch) => {

        authAPI.login(email, password , rememberMe)
            .then(data => {
                console.log('sdf');
            if (data.data.resultCode === 0) {

                dispatch(getAuthMeThunkCreator());
            }
            else
            {
                let err_mess = data.data.messages.length > 0 ? data.data.messages : "Some error!!!"
                 dispatch(stopSubmit('login', {_error:err_mess}));
            }
        });
    }
}
export const logoutThunkCreator = () => {
    return (dispatch) => {

        authAPI.logout()
            .then(data => {
                if (data.data.resultCode == 0) {
                    dispatch(setAuthUserData(null, null, null, false))
                }
            });
    }
}

export default authReducer;