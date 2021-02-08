import React from "react";
import {Route} from "react-router-dom";
import c from "./Content.module.css";
import {Dialog} from "../Dialogs/Dialogs";
import {Profile} from "../Profile/Profile";
import {Settings} from "../Settings/Settings";
import {News} from "../News/News";
import UsersContainer from "../Users/UsersContainer";
import ProfileContainer from "../Profile/ProfileContainer";


export const Content: React.FC = () => {

    return <div className={c.content}>
        <Route path="/messages" render={ () => <Dialog/> }/>
        <Route path="/profile" component={ProfileContainer}/>
        <Route path="/news" component={News}/>
        <Route path="/settings" component={Settings}/>
        <Route path="/users" component={UsersContainer} />
    </div>
}