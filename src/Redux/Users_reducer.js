const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';

let initialState = {
    users: [],
    pageSize: 50,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
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
               // ...state,
               //  users: [...state.users,...action.users]
                ...state, users: action.users
            }
        }
        case SET_CURRENT_PAGE:{
            return {...state, currentPage: action.currentPage}
        }
        case SET_TOTAL_USERS_COUNT:{
            return {...state, totalUsersCount: action.totalCount}
        }
        case TOGGLE_IS_FETCHING:{
            return {...state, isFetching: action.isFetching}

        }
        default:
        {
            return {
                ...state,
            };
        }
    }

}

export const follow = (userId) => ({type: FOLLOW, userId})
export const unfollow = (userId) => ({type: UNFOLLOW, userId})
export const setUsers = (users) => ({type: SET_USERS, users})
export const setCurrentPage = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage})
export const setTotalUsersCount = (totalCount) => ({type: SET_TOTAL_USERS_COUNT, totalCount})
export const toggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING,isFetching})

export default UsersReducer;