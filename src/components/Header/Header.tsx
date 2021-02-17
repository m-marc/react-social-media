import React from 'react';
import h from './Header.module.css';
import {NavLink} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {logout} from "../../redux/auth-reducer";
import {selectAuth} from "../../redux/Selectors";


export const Header: React.FC = () => {
    const {isAuth, login} = useSelector(selectAuth)
    const dispatch = useDispatch()
    const logoutHandle = () => dispatch(logout())
    return <header className={h.header}>
        <div>
            {isAuth ?
                <><h2>{login}</h2><button onClick={logoutHandle}>Log out</button></> :
                <NavLink to={'/login'}>Login</NavLink>}
        </div>
    </header>
}