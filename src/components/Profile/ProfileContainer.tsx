import React, {useEffect} from "react";
import {Profile} from "./Profile";
import {useRouteMatch} from "react-router-dom";
import {useSelector, useDispatch} from "react-redux";
import {selectProfile} from "../../redux/Selectors";
import {getUserProfile, getUserStatus} from "../../redux/profile-reducer";

interface MatchParams {
    userId: string
}

const ProfileContainer = () => {
    const dispatch = useDispatch()
    const {profile, status} = useSelector(selectProfile)
    const match = useRouteMatch<MatchParams>("/profile/:userId")
    let userId = match ? match.params.userId : 13618

    useEffect( () => {
        dispatch(getUserProfile(userId))
        dispatch(getUserStatus(userId))
    }, [userId])

    return <Profile profile={profile} status={status}/>
}

export default ProfileContainer