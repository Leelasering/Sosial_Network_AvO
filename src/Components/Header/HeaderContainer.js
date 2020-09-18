import React from 'react';
import * as axios from "axios";
import {connect} from "react-redux";
import Header from "./Header";
import {setAuthUserData} from "../../Redux/Auth_reduser";
import {setUserProfile} from "../../Redux/Profile_reducer";
import {userAPI} from "../../API/api";


class HeaderContainer extends React.Component {
    componentDidMount() {
        userAPI.getAuthMe().then(data => {
            if (data.resultCode == 0) {
                let {id, email, login} = data.data
                this.props.setAuthUserData(id, email, login)
                userAPI.getProfile(id).then(data => {
                    //   this.props.toggleIsFetching(false);
                    this.props.setUserProfile(data);
                });
            }
        });
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


export default connect(mapStateToProps, {
    setAuthUserData,
    setUserProfile
})(HeaderContainer);