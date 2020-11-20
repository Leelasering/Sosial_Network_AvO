import React from 'react';
import {connect} from "react-redux";
import NavBar from "./NavBar";



let mapStateToProps = (state) => {
    return {
        id: state.Auth.userId

    }
}
let mapDispatchToProps = (dispatch) => {
    return {

    }
}


const NavBarContainer = connect(mapStateToProps,mapDispatchToProps)(NavBar);

export default NavBarContainer;