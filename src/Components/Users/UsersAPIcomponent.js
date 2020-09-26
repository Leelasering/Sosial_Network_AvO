import React from 'react';
import Users from "./Users";
import Preloader from "../General/PreLoader/Preloader";
import {AuthRedirect} from "../../hoc/WithAuthRedirect";


class UsersAPIcomponent extends React.Component {

    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);

        this.props.getUsersThunkCreator(pageNumber,this.props.pageSize,this.props.users.length = 0);

    }

    componentDidMount() {

        this.props.getUsersThunkCreator(this.props.currentPage,this.props.pageSize,this.props.users.length);
    }


    render() {
        return <>
            {this.props.isFetching ? <Preloader/> : null}
            <Users totalUsersCount={this.props.totalUsersCount}
                   pageSize={this.props.pageSize}
                   currentPage={this.props.currentPage}
                   onPageChanged={this.onPageChanged}
                   users={this.props.users}
                   follow={this.props.follow}
                   unfollow={this.props.unfollow}
                   followingInProgress={this.props.followingInProgress}
                   toggleIsFollowingProgress={this.props.toggleIsFollowingProgress}
                   FollowThunkCreator={this.props.FollowThunkCreator}
                   UnfollowThunkCreator={this.props.UnfollowThunkCreator}
            />
        </>
    }
}


export default AuthRedirect(UsersAPIcomponent);

