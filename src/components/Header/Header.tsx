import React from 'react';
import h from './Header.module.css';
import {NavLink} from "react-router-dom";
import {useDispatch} from "react-redux";
import {logout} from "../../redux/auth-reducer";

type headerPropsType = {
    auth: boolean,
    login: string | null
}

export const Header: React.FC<headerPropsType> = ({auth, login}) => {
    const dispatch = useDispatch()
    const logoutHandle = () => dispatch(logout())
    return <header className={h.header}>
        <div>
            {auth ?
                <><h2>{login}</h2><button onClick={logoutHandle}>Log out</button></> :
                <NavLink to={'/login'}>Login</NavLink>}
        </div>
    </header>
}