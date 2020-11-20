import {profileAPI} from "../API/api";
import {setTotalUsersCount, setUsers, toggleIsFetching} from "./Users_reducer";

const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const GET_STATUS = 'GET_STATUS';
const SET_STATUS = 'UPDATE_STATUS';

let initialState = {
    posts: [
        {id : '0', name : 'Anatoly Marginal', text : 'Hfdsf', l_count : "121", date : '23.07.2020'},
      // {id : '1', name : 'Andrey Mohortov', text : 'Hello!', l_count : "121", date : '23.07.2020'},
      // {id : '2', name : 'Igor Chebotar', text : 'Good bye', l_count : "11", date : '23.07.2020'},
        // {id: '3', name: 'Maxim Smolentsev', text: 'How r u?', l_count: "11", date: '23.07.2020'},
        // {id: '4', name: 'Artem Arti-Fix', text: 'What r u doing?', l_count: "131", date: '23.07.2020'},
        // {id: '5', name: 'Nikolay Agafonov', text: 'sdgsgsdg', l_count: "13", date: '23.07.2020'},
        // {id: '6', name: 'Egor Greenenko', text: 'Hsdgsgs', l_count: "121", date: '23.07.2020'},
        // {id: '7', name: 'Vera Barkova', text: 'Hsdgsgsdgsdg', l_count: "123", date: '23.07.2020'},
        // {id: '8', name: 'Artem Sheglow', text: 'Hdgfdfhhfg', l_count: "123", date: '23.07.2020'},
        // {id: '9', name: 'Vladimir Alipov', text: 'Hfghhfghfgh', l_count: "12", date: '23.07.2020'}

    ],
    profile: null,
    status: ""
}

const ProfileReducer = (state = initialState, action) => {


    switch (action.type) {
        case ADD_POST: //____________________________________ADD_POST
        {
            let stateCopy = {
                ...state,
                posts : [...state.posts],
            };
            

                let newPost = {
                    id: 505,
                    text: action.post_text,
                    name: 'FirstName LastName',
                    l_count: 0,
                    date: '27.07.2020'
                };
                stateCopy.posts.push(newPost);


            return stateCopy;
        }


        case SET_USER_PROFILE: //________________________UPDATE_NEW_POST_TEXT
        {
            return {...state, profile: action.profile};
        }
        case GET_STATUS: //________________________UPDATE_NEW_POST_TEXT
        {
            return {...state, status: action.status};
        }
        case SET_STATUS: //________________________UPDATE_NEW_POST_TEXT
        {
            return {...state, status: action.status};
        }

        default:
        {
            return  {
                ...state,
            };

        }
    }
}
export const setUserStatus = (status) => ({type: SET_STATUS,status});
export const addPostActionCreator = (post_text) => ({type: ADD_POST,post_text});
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile});
export const updateNewPostTextActionCreator = (text) =>({
    type: UPDATE_NEW_POST_TEXT,
    text: text});

export const getProfileThunkCreator = (userId) => {
    return (dispatch) => {


       /* let userId = paramId;
        if (!userId) {
            userId = id;
        }*/

        profileAPI.getProfile(userId).then(data => {
            dispatch(setUserProfile(data));
        });
    }
}
export const getStatusThunkCreator = (userId) => {
    return (dispatch) => {

        /*let userId = paramId;
        if (!userId) {
            userId = id;
        }*/

        profileAPI.getProfileStatus(userId).then(data => {
            dispatch(setUserStatus(data));
        });
    }
}
export const updateStatusThunkCreator = (status) => {
    return (dispatch) => {

        profileAPI.updateProfileStatus(status)
            .then(response => {

            if(response.resultCode == 0)
            {
                dispatch(setUserStatus(status));
            }
        });
    }
}

export default ProfileReducer;