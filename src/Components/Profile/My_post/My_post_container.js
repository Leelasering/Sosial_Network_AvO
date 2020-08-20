import React from 'react';
import MyPost from "./My_post";
import {connect} from "react-redux";


//const MyPostContainer = (props) => {
//
//
//    return (
//        <StoreContext.Consumer>
//            {(store) =>
//            {
//            return (
//                    <MyPost posts={store.getState().ProfilePage.posts}/>
//                );
//
//            }
//            }
//        </StoreContext.Consumer>
//    )
//}
let mapStateToProps = (state) => {
    return {
        posts: state.ProfilePage.posts
    }
}
let mapDispatchToProps = (dispatch) => {}


const MyPostContainer = connect(mapStateToProps,mapDispatchToProps)(MyPost);

export default MyPostContainer;