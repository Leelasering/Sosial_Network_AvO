import React from 'react';
import {connect} from "react-redux";
import {
    follow, FollowThunkCreator, getUsersThunkCreator,
    setCurrentPage,
    setTotalUsersCount,
    setUsers,
    toggleIsFetching, toggleIsFollowingProgress,
    unfollow, UnfollowThunkCreator
} from "../../Redux/Users_reducer";
import UsersAPIcomponent from "./UsersAPIcomponent";


let mapStateToProps = (state) => ({
        users: state.UsersPage.users,
        pageSize: state.UsersPage.pageSize,
        totalUsersCount: state.UsersPage.totalUsersCount,
        currentPage: state.UsersPage.currentPage,
        isFetching: state.UsersPage.isFetching,
        followingInProgress: state.UsersPage.followingInProgress,
})


const UsersContainer = connect(mapStateToProps,{
    follow,
    unfollow,
    setUsers,
    setCurrentPage,
    setTotalUsersCount,
    toggleIsFetching,
    toggleIsFollowingProgress,

    getUsersThunkCreator,
    UnfollowThunkCreator,
    FollowThunkCreator,

    })(UsersAPIcomponent);

export default UsersContainer;