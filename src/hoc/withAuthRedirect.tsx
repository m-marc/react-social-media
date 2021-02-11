import React from "react";
import {Redirect, Route, RouteProps} from "react-router-dom";
import {useSelector} from "react-redux";
import {selectAuth} from "../redux/Selectors";

export function PrivateRoute ({component: Component, ...rest}: RouteProps & {component: () => React.ReactElement}) {
    const {isAuth} = useSelector(selectAuth)
    return <Route {...rest} render={(props) => (
        isAuth ? <Component {...props} /> : <Redirect to="/login"/>
    )}/>
}