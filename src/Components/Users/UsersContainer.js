import React from 'react';
import {connect} from "react-redux";
import Users from "./Users";
import {followAC, setUsersAC, unfollowAC} from "../../Redux/Users_reducer";



//const FriendsContainer = (props) => {
//
//
//
//    return (
//        <StoreContext.Consumer>
//            {(store) =>
//            {
//                let friends = store.getState().SiteBar.friends;
//
//
//                return (
//                    <Friends friends={friends}/>
//                );
//
//            }
//            }
//        </StoreContext.Consumer>
//    )
//}

let mapStateToProps = (state) => {

    return {
        users: state.UsersPage.users
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        follow: (userId) => {
            dispatch(followAC(userId));
        },
        unfollow: (userId) => {
            dispatch(unfollowAC(userId));
        },
        setUsers: (users) => {

          dispatch(setUsersAC(users));

        }
    }
}


const UsersContainer = connect(mapStateToProps,mapDispatchToProps)(Users);

export default UsersContainer;