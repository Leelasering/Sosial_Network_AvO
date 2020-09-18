import React from 'react';

import Profile from "./Profile";
import {connect} from "react-redux";
import {setUserProfile} from "../../Redux/Profile_reducer";
import {withRouter} from "react-router-dom";
import {userAPI} from "../../API/api";


class ProfileContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = this.props.id;
        }
        userAPI.getProfile(userId).then(data => {

            this.props.setUserProfile(data);
        });
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
let mapDispatchToProps = (state) => ({})

let withUrlDataContainerComponent = withRouter(ProfileContainer);

export default connect(mapStateToProps, {setUserProfile})(withUrlDataContainerComponent);