import React from 'react';

import Profile from "./Profile";
import {connect} from "react-redux";
import {setUserProfile} from "../../Redux/Profile_reducer";
import {Redirect, withRouter} from "react-router-dom";
import {getProfileThunkCreator} from "../../Redux/Profile_reducer";
import {AuthRedirect} from "../../hoc/WithAuthRedirect";
import {compose} from "redux";


class ProfileContainer extends React.Component {
    componentDidMount() {

        this.props.getProfileThunkCreator(this.props.match.params.userId, this.props.id);
    }

    render() {
        return (
            <Profile {...this.props} profile={this.props.profile}/>
        );
    };

}

let mapStateToProps = (state) => ({
    profile: state.ProfilePage.profile,
    id: state.Auth.userId,
})


export default compose(
    connect(mapStateToProps, {setUserProfile, getProfileThunkCreator}),
    withRouter,
    AuthRedirect,
)(ProfileContainer);