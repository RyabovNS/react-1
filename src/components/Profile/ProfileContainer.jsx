import React from 'react';
import {connect} from "react-redux";

import {getUserProfile} from "../../redux/profile-reducer";
import withRouter from "../common/Legacy/withRouter";

import Profile from "./Profile";
import {Navigate} from "react-router-dom";

class ProfileContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.router.params.userId;
        if (!userId) {
            userId = 2;
        }

        this.props.getUserProfile(userId);

        // usersAPI
        //     .getProfile(userId)
        //     .then(data => {
        //         this.props.setUserProfile(data);
        //     })

    }

    render() {
        if (!this.props.isAuth) return <Navigate to='/login'/>

        return (
            <Profile {...this.props} profile={this.props.profile}/>
        );
    }
}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    isAuth: state.auth.isAuth
})

let WithUrlDataContainerComponent = withRouter(ProfileContainer);

export default connect(mapStateToProps, {getUserProfile})(WithUrlDataContainerComponent);