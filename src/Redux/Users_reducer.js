const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';

let initialState = {
    users: []
}
// [{id: '13', name: 'Andrey Mohortov', city: 'Kharkiv',followed: true, ava:'/static/media/tree.c6f60dad.png',status: ''},
//     {id: '14', name: 'Igor Chebotar', city: 'Moscow',followed: false, ava:'/static/media/tree.c6f60dad.png',status: ''},
//     {id: '15', name: 'Maxim Smolentsev', city: 'Kiev',followed: true, ava:'/static/media/tree.c6f60dad.png',status: ''},
//     {id: '28', name: 'Artem Arti-Fix', city: 'London',followed: false, ava:'/static/media/tree.c6f60dad.png',status: ''},
//     {id: '29', name: 'Nikolay Agafonov', city: 'LA',followed: false, ava:'/static/media/tree.c6f60dad.png',status: ''},
//     {id: '30', name: 'Egor Greenenko', city: 'New York',followed: true, ava:'/static/media/tree.c6f60dad.png',status: ''},
// ]
const UsersReducer = (state = initialState, action) =>
{
    switch (action.type) {
        case FOLLOW: {
            return {
                ...state,
                users: state.users.map( u => {
                    if (u.id === action.userId){
                        return {...u, followed : true};
                    }
                    return u;
                })
            };
        }
        case UNFOLLOW: {
            return {
                ...state,
                users: state.users.map( u => {
                 if (u.id === action.userId){
                     return {...u, followed : false};
                 }
                 return u;
                })
            };
        }
        case SET_USERS:{
            return {
                ...state,
                 users: [...state.users,...action.users]
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

export const followAC = (userId) => ({type: FOLLOW, userId})
export const unfollowAC = (userId) => ({type: UNFOLLOW, userId})
export const setUsersAC = (users) => ({type: SET_USERS, users})

export default UsersReducer;