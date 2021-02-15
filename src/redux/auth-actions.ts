import {useDispatch as _useDispatch} from "react-redux";

export enum ACTIONS_TYPE {
    AUTH_USER = 'Header/userLogin',
    USER_LOGIN = 'Login/loginForm'
}

export const userLogin = (userData: {}) => ({type: ACTIONS_TYPE.AUTH_USER, payload: userData})
export type userLogin = ReturnType<typeof userLogin>


export type AuthReducerTypes = userLogin

export function useDispatch() {
    const dispatch = _useDispatch()
    return (ac: AuthReducerTypes) => dispatch(ac)
}