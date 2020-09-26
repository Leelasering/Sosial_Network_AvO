import {userAPI} from "../API/api";
import {setUserProfile} from "./Profile_reducer";

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
                ...action.data,
                isAuth: true,
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

export const setAuthUserData = (userId,email,login) => ({type: SET_USER_DATA, data : {userId,email,login}})

export const getAuthMeThunkCreator = () => {
    return (dispatch) => {

        userAPI.getAuthMe().then(data => {
            if (data.resultCode == 0) {
                let {id, email, login} = data.data
                dispatch(setAuthUserData(id, email, login))
                userAPI.getProfile(id).then(data => {
                    //   this.props.toggleIsFetching(false);
                    dispatch(setUserProfile(data));
                });
            }
        });
    }
}

export default authReducer;