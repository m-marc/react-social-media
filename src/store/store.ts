import {combineReducers, createStore} from "redux";
import {dialogsReducer} from "./dialogs-reducer";
import {usersReducer} from "./users-reducer";
import {profileReducer} from "./profile-reducer";

const rootReducer = combineReducers({
    dialogs: dialogsReducer,
    users: usersReducer,
    profilePage: profileReducer
})

export const store = createStore(rootReducer)

export type IGlobalState = ReturnType<typeof rootReducer>