import React, {useEffect} from "react";
import {Profile} from "./Profile";
import {useRouteMatch} from "react-router-dom";
import axios from "axios";
import {SetUserProfile, useDispatch} from "../../store/profile-actions";
import {useSelector} from "react-redux";
import {selectProfile} from "../../store/Selectors";

export interface MatchParams {
    userId: string
}

const ProfileContainer = () => {
    const dispatch = useDispatch()
    const {profile} = useSelector(selectProfile)
    const match = useRouteMatch<MatchParams>("/profile/:userId")
    let userId = match ? match.params.userId : 2

    useEffect( () => {
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
            .then(res => {
                // @ts-ignore
                dispatch(SetUserProfile(res.data))
            })
    }, [userId])

    return <Profile profile={profile} />
}

export default ProfileContainer