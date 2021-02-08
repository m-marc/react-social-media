import React from "react";
import n from "./Navbar.module.css";
import {NavLink} from "react-router-dom";

export const Navbar = () => {
    return <nav>
        <NavLink className={n.link} activeClassName={n.active} to="/profile">
            <span>Profile</span>
        </NavLink>
        <NavLink className={n.link} activeClassName={n.active} to="/messages">
            <span>Messages</span>
        </NavLink>
        <NavLink className={n.link} activeClassName={n.active} to="/news">
            <span>News</span>
        </NavLink>
        <NavLink className={n.link} activeClassName={n.active} to="/settings">
            <span>Settings</span>
        </NavLink>
        <NavLink className={n.link} activeClassName={n.active} to={"/users"}>
            <span>Users</span>
        </NavLink>
    </nav>
}