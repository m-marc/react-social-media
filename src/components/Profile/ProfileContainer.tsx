import React from "react";
import {Profile} from "./Profile";
import axios from "axios";

class ProfileContainer extends React.Component{
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`)
            .then(res => {
                // this.props.setUserProfile(res.data)
            })
    }

    render(){
        // @ts-ignore
        return <Profile {...this.props} />
    }
}

export default ProfileContainer