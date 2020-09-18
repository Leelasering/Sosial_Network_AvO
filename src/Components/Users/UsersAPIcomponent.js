import React from 'react';
import Users from "./Users";
import Preloader from "../General/PreLoader/Preloader";
import {getUsers, userAPI as usersAPI} from "../../API/api";

class UsersAPIcomponent extends React.Component {


    getUsers = () => {
        if (this.props.users.length === 0) {
            usersAPI.getUsers().then(data => {
                this.props.setUsers(data.items)
            });
        }
    }
    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        this.props.toggleIsFetching(true);

        usersAPI.getUsers(pageNumber, this.props.pageSize).then(data => {
            this.props.toggleIsFetching(false);
            this.props.setUsers(data.items);
        });
    }

    componentDidMount() {
        if (this.props.users.length === 0) {
            this.props.toggleIsFetching(true);

            usersAPI.getUsers(this.props.currentPage, this.props.pageSize).then(data => {
                this.props.toggleIsFetching(false);
                this.props.setUsers(data.items);
                this.props.setTotalUsersCount(data.totalCount);

            });
        }
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
            />
        </>
    }
}

export default UsersAPIcomponent;

