import React from "react"
import {profileType} from "../../redux/profile-reducer";
import Preloader from "../common/Preloader/Preloader";

type profilePropsType = {
    profile?: profileType
}

export const Profile: React.FC<profilePropsType> = ({profile}) => {
    return <div>
        {!profile && <Preloader />}
        {profile && <><img src={profile.photos.small} alt={profile.fullName}/>
            <h1>{profile.fullName}</h1></>}
        {profile && profile.lookingForAJob && <p>{profile.lookingForAJobDescription}</p>}
    </div>
}