import React from "react";
import {Route, Switch} from "react-router-dom";
import c from "./Content.module.css";
import {Dialog} from "../Dialogs/Dialogs";
import {Settings} from "../Settings/Settings";
import {News} from "../News/News";
import UsersContainer from "../Users/UsersContainer";
import ProfileContainer from "../Profile/ProfileContainer";
import Login from "../Login/Login";
import {PrivateRoute} from "../../hoc/withAuthRedirect";

export const Content: React.FC = () => {

    return <div className={c.content}>
        <Switch>
            <Route path="/login" component={Login}/>
            <Route path="/messages" render={ () => <Dialog/> }/>
            <PrivateRoute component={ProfileContainer} path="/profile" />
            {/*<Route path="/profile" component={ProfileContainer}/>*/}
            <Route path="/news" component={News}/>
            <Route path="/settings" component={Settings}/>
            <Route path="/users" component={UsersContainer} />
        </Switch>
    </div>
}