import React from 'react';
import {connect} from "react-redux";
import {compose} from "redux";
import ProfileStatus from "./ProfileStatus";
import {updateStatusThunkCreator} from "../../../../Redux/Profile_reducer";


let mapStateToProps = (state) => ({
    profile: state.ProfilePage.profile,
    id: state.Auth.userId,
    status: state.ProfilePage.status,
})


export default compose(
    connect(mapStateToProps, {updateStatusThunkCreator}),
)(ProfileStatus);