import {useDispatch as _useDispatch} from "react-redux";

export enum ACTIONS_TYPE {
    AUTH_USER = 'Header/userLogin'
}

interface userData {
    id: null | number;
    email: null | string;
    login: null | string;
    isAuth?: boolean;
}

export const userLogin = (userData: userData) => ({type: ACTIONS_TYPE.AUTH_USER, payload: userData})
export type userLogin = ReturnType<typeof userLogin>


export type AuthReducerTypes = userLogin

export function useDispatch() {
    const dispatch = _useDispatch()
    return (ac: AuthReducerTypes) => dispatch(ac)
}