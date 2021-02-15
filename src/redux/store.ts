import {Action, applyMiddleware, combineReducers, createStore} from "redux";
import {dialogsReducer} from "./dialogs-reducer";
import {usersReducer} from "./users-reducer";
import {profileReducer} from "./profile-reducer";
import {authReducer} from "./auth-reducer";
import thunk, {ThunkAction} from "redux-thunk";

const rootReducer = combineReducers({
    dialogs: dialogsReducer,
    users: usersReducer,
    profilePage: profileReducer,
    auth: authReducer
})

export const store = createStore(rootReducer, applyMiddleware(thunk))

export type IGlobalState = ReturnType<typeof rootReducer>

export type BaseThunkType<A extends Action = Action, R = Promise<void>> = ThunkAction<R, IGlobalState, unknown, A>