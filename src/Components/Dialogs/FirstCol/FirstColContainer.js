import React from 'react';
import FirstCol from "./FirstCol";
import {connect} from "react-redux";




//const FirstColContainer = (props) => {
//return (
//        <StoreContext.Consumer>
//            {(store) =>
//            {
//
//                let dial_names=store.getState().DialogsPage.dial_names;
//
//                return (
//                    <FirstCol dial_names={dial_names}/>
//                );
//
//            }
//            }
//        </StoreContext.Consumer>
//    )
//
//}


let mapStateToProps = (state) => {
    return {
        dial_names: state.DialogsPage.dial_names
    }
}
let mapDispatchToProps = (dispatch) => {
    return {

    }
}


const FirstColContainer = connect(mapStateToProps,mapDispatchToProps)(FirstCol);

export default FirstColContainer;