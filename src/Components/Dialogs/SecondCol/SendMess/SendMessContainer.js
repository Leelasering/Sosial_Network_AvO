import React from 'react';
import {sendMessActionCreator} from "../../../../Redux/Dialogs_reducer";
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

}
let mapDispatchToProps = (dispatch) => {

    return {
        sendMess: (mess_text) => {
            dispatch(sendMessActionCreator(mess_text));
        },
    }
}
const SendMessContainer = connect(mapStateToProps,mapDispatchToProps)(SendMess);

// $('html').css('overflow','hidden');


export default SendMessContainer;