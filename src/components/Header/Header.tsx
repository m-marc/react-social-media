import React from 'react';
import h from './Header.module.css';
import {NavLink} from "react-router-dom";

type headerPropsType = {
    auth: boolean,
    login: string | null
}

export const Header: React.FC<headerPropsType> = ({auth, login}) => {
    return <header className={h.header}>
        <div>
            {auth ? (<h2>{login}</h2>) : <NavLink to={'/login'}>Login</NavLink>}
        </div>
    </header>
}