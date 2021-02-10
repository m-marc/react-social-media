import React from "react"
import { Redirect } from "react-router-dom";
import {profileType} from "../../redux/profile-reducer";
import Preloader from "../common/Preloader/Preloader";

type profilePropsType = {
    profile?: profileType,
    auth: boolean
}

export const Profile: React.FC<profilePropsType> = ({profile, auth}) => {

    if (!auth) return <Redirect to="/login" />

    return <div>
        {!profile && <Preloader />}
        {profile && <><img src={profile.photos.small} alt={profile.fullName}/>
            <h1>{profile.fullName}</h1></>}
        {profile && profile.lookingForAJob && <p>{profile.lookingForAJobDescription}</p>}
    </div>
}