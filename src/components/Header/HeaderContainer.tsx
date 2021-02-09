import React, {useEffect} from 'react';
import {Header} from "./Header";
import {useSelector, useDispatch} from "react-redux";
import {selectAuth} from "../../redux/Selectors";
import {authMe} from "../../redux/auth-reducer";

export const HeaderContainer = () => {
    const dispatch = useDispatch()
    const {isAuth, login} = useSelector(selectAuth)

    useEffect(() => {
        dispatch(authMe())
    }, [dispatch])
    return <Header auth={isAuth} login={login} />
}