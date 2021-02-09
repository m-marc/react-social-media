import {ACTIONS_TYPE, AuthReducerTypes, userLogin} from "./auth-actions";
import {ThunkAction} from "redux-thunk";
import {IGlobalState} from "./store";
import {API} from "../api/api";

let initialState = {
    userId: 2,
    email: 'blabla@bla.bla',
    login: 'samurai',
    isAuth: false
}

export const authReducer = (state = initialState, action: AuthReducerTypes) => {
    switch(action.type) {
        case ACTIONS_TYPE.AUTH_USER:
            return {
                ...state,
                ...action.payload
            }
        default:
            return state
    }
}

type ThunkType = ThunkAction<void, IGlobalState, unknown, AuthReducerTypes>

export const authMe = (): ThunkType => {
    return (dispatch => {
        API.authMe().then(res => {
            if(res.data === 0) dispatch(userLogin(res.data))
        })
    })
}