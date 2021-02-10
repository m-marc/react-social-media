import React, {Component, ComponentType} from "react";
import {Redirect, Route} from "react-router-dom";
import {useSelector} from "react-redux";
import {selectAuth} from "../redux/Selectors";

export function PrivateRoute ({component: Component, ...rest}: {path: string, component: ComponentType<any>}) {
    const {isAuth} = useSelector(selectAuth)
    return <Route {...rest} render={(props) =>(
        isAuth ? <Component {...props}/> : <Redirect to="/login"/>
    )} />
}