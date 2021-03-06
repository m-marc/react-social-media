import {ACTIONS_TYPE, AuthReducerTypes, userLogin} from "./auth-actions";
import {API} from "../api/api";
import {Dispatch} from "redux";

type AuthStateType = {
    id: number | null
    email: string | null
    login: string | null
    isAuth: boolean
}

let initialState = {
    id: null,
    email: null,
    login: null,
    isAuth: false
}

export const authReducer = (state: AuthStateType = initialState, action: AuthReducerTypes): AuthStateType => {
    switch(action.type) {
        case ACTIONS_TYPE.AUTH_USER:
            return {
                ...state,
                ...action.payload,
            }
        default:
            return state
    }
}

// type ThunkType = ThunkAction<void, IGlobalState, unknown, AuthReducerTypes>

export const authMe = () => (dispatch: Dispatch) => {
    API.authMe().then(res => {
        if(res.resultCode === 0)
            dispatch(userLogin({...res.data, isAuth: true}))
    })
}

export const login = (email: string, password: string, rememberMe: boolean) => (dispatch: Dispatch<any>) => {
    API.login(email, password, rememberMe).then(res => {
        if (res.resultCode === 0) dispatch(authMe())
    })
}

export const logout = () => (dispatch: Dispatch<any>) => {
    API.logout().then(res => {
        if (res.data.resultCode === 0)
            dispatch(userLogin({id:null, email: null, login: null, isAuth: false}))
    })
}