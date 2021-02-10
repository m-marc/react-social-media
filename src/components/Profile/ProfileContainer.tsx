import React, {useEffect} from "react";
import {Profile} from "./Profile";
import {useRouteMatch} from "react-router-dom";
import {useSelector, useDispatch} from "react-redux";
import {selectAuth, selectProfile} from "../../redux/Selectors";
import {getUserProfile} from "../../redux/profile-reducer";

export interface MatchParams {
    userId: string
}

const ProfileContainer = () => {
    const dispatch = useDispatch()
    const {profile} = useSelector(selectProfile)
    const {isAuth} = useSelector(selectAuth)
    const match = useRouteMatch<MatchParams>("/profile/:userId")
    let userId = match ? match.params.userId : 13618

    useEffect( () => {
        dispatch(getUserProfile(userId))
    }, [userId])

    return <Profile profile={profile} auth={isAuth}/>
}

export default ProfileContainer