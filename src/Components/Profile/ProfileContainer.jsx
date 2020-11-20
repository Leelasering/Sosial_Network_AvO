import React from 'react';

import Profile from "./Profile";
import {connect} from "react-redux";
import {setUserProfile} from "../../Redux/Profile_reducer";
import {Redirect, withRouter} from "react-router-dom";
import {getProfileThunkCreator,getStatusThunkCreator} from "../../Redux/Profile_reducer";
import {AuthRedirect} from "../../hoc/WithAuthRedirect";
import {compose} from "redux";


class ProfileContainer extends React.Component {
    componentDidMount() {
        //this.props.match.params.userId не приходит при нажатие на Profile в меню тк в адресной
        // строке отсутствует id пользователя "http://localhost:3000/Profile/10922"
        //this.props.id не прихоит тк не успевает произойти запрос на авторизованого пользователя
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = this.props.authorizedUserId;
        }
        if(!userId)
        {
           this.props.history.push("/Login")

        }

        this.props.getProfileThunkCreator(userId);
        this.props.getStatusThunkCreator(userId)
    }

    render() {
        return (
            <Profile {...this.props} profile={this.props.profile}/>
        );
    };

}

let mapStateToProps = (state) => ({
    profile: state.ProfilePage.profile,
    authorizedUserId: state.Auth.userId,
    isAuth: state.Auth.isAuth,
    status: state.ProfilePage.status,
})


export default compose(
    withRouter,
    connect(mapStateToProps, {setUserProfile, getProfileThunkCreator, getStatusThunkCreator}),

   /*AuthRedirect,*/
)(ProfileContainer);