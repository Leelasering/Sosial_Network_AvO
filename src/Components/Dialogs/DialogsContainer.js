import React from 'react';
import {connect} from "react-redux";
import Dialogs from "./Dialogs";
import {Redirect} from "react-router-dom";
import {AuthRedirect} from "../../hoc/WithAuthRedirect";
import {compose} from "redux";


let mapStateToProps = (state) => ({})
let mapDispatchToProps = (dispatch) => {

}

const DialogsContainer = compose(

    connect(mapStateToProps, mapDispatchToProps),
    AuthRedirect,

)(Dialogs)


export default DialogsContainer;