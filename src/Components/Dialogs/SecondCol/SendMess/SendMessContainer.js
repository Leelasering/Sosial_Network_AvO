import React from 'react';
import {sendMessActionCreator, updateNewMessTextActionCreator} from "../../../../Redux/Dialogs_reducer";
import SendMess from "./SendMess";
import {connect} from "react-redux";



//const SendMessContainer = (props) => {
//
//    return (
//        <StoreContext.Consumer>
//            {(store) =>
//            {
//                let state = store.getState();
//                let dispatch= store.dispatch.bind(store);
//                let sendMess_ui = () => {
//                    dispatch(sendMessActionCreator());
//                }
//                let onMessChange = (text) => {
//                    dispatch(updateNewMessTextActionCreator(text));
//                }
//
//                return <SendMess sendMess={sendMess_ui}
//                          updateNewMessText={onMessChange}
//                          MessText={store.getState().DialogsPage.NewMessText}/>
//            }
//        }
//
//        </StoreContext.Consumer>
//                  );
//
//}

let mapStateToProps = (state) => {
    return {
        MessText: state.DialogsPage.NewMessText
    }
}
let mapDispatchToProps = (dispatch) => {

    return {
        sendMess: () => {
            dispatch(sendMessActionCreator());
        },
        updateNewMessText: (text) => {
            dispatch(updateNewMessTextActionCreator(text));
        }
    }
}
const SendMessContainer = connect(mapStateToProps,mapDispatchToProps)(SendMess);

// $('html').css('overflow','hidden');


export default SendMessContainer;