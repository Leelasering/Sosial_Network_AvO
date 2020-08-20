import React from 'react';
import Friends from "./Friends";
import {connect} from "react-redux";



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
        friends: state.SiteBar.friends
    }
}
let mapDispatchToProps = (dispatch) => {
    return {

    }
}


const FriendsContainer = connect(mapStateToProps,mapDispatchToProps)(Friends);

export default FriendsContainer;