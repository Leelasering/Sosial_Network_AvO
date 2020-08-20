import React from 'react';
import DialHistory from "./DialHistory";
import {connect} from "react-redux";



//const DialHistoryContainer = (props) => {
//    return (
//        <StoreContext.Consumer>
//            {(store) =>
//            {
//                let messages = store.getState().DialogsPage.messages;
//                return (
//                    <DialHistory messages={messages}/>
//                );
//
//            }
//            }
//        </StoreContext.Consumer>
//    )
//}


let mapStateToProps = (state) => {
    return {
        messages: state.DialogsPage.messages
    }
}
let mapDispatchToProps = (dispatch) => {}


const DialHistoryContainer = connect(mapStateToProps,mapDispatchToProps)(DialHistory);

// $('html').css('overflow','hidden');


export default DialHistoryContainer;