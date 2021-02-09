import {useDispatch as _useDispatch} from "react-redux";

export enum ACTIONS_TYPE {
    AUTH_USER = 'Header/userLogin'
}

export type userLogin = {
    type: ACTIONS_TYPE.AUTH_USER,
    payload: {}
}

export const userLogin = (userData: {}):userLogin => {
    return {type: ACTIONS_TYPE.AUTH_USER, payload: userData}
}

export type AuthReducerTypes = userLogin

export function useDispatch() {
    const dispatch = _useDispatch()
    return (ac: AuthReducerTypes) => dispatch(ac)
}