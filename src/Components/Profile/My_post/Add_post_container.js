import React from 'react';
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../Redux/Profile_reducer";
import Add_post from "./Add_post";

import {connect} from "react-redux";



//const AddPostContainer = (props) => {
//
//
//
//    return (
//        <StoreContext.Consumer>
//            {(store) =>
//            {
//                let state = store.getState();
//                let dispatch= store.dispatch.bind(store);
//
//                let addPost_ui = () => {
//                    dispatch(addPostActionCreator());
//                }
//                let onPostChange = (text) => {
//                    dispatch(updateNewPostTextActionCreator(text));
//                }
//
//
//                return <Add_post updateNewPostText={onPostChange}
//                              addPost={addPost_ui}
//                              PostText={state.ProfilePage.NewPostText}/>
//
//            }
//            }
//        </StoreContext.Consumer>
//        )
//}



let mapStateToProps = (state) => {
    return {
        PostText: state.ProfilePage.NewPostText
    }
}
let mapDispatchToProps = (dispatch) => {

    return {
        addPost: () => {
            dispatch(addPostActionCreator());
        },
        updateNewPostText: (text) => {
            dispatch(updateNewPostTextActionCreator(text));
        }
    }
}
const AddPostContainer = connect(mapStateToProps,mapDispatchToProps)(Add_post);


export default AddPostContainer;