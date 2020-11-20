import React from 'react';
import * as axios from "axios";
import {connect} from "react-redux";
import Header from "./Header";
import {logoutThunkCreator, setAuthUserData} from "../../Redux/Auth_reduser";
import {setUserProfile} from "../../Redux/Profile_reducer";
import {userAPI} from "../../API/api";
import {getAuthMeThunkCreator} from "../../Redux/Auth_reduser";


class HeaderContainer extends React.Component {
    componentDidMount() {

    }

    render() {
        return (
            <Header {...this.props}/>

        );
    };
}

let mapStateToProps = (state) => ({
    isAuth: state.Auth.isAuth,
    login: state.Auth.login,
    id: state.Auth.id,
    email: state.Auth.email
})
let mapDispatchToProps = (state) => ({})


export default connect(mapStateToProps, {logoutThunkCreator})(HeaderContainer);