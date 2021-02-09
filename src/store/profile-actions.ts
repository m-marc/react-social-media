import {useDispatch as _useDispatch} from "react-redux";
import {profileType} from "./profile-reducer";

export enum ACTIONS_TYPE {
    ADD_POST = 'Profile/addPost',
    UPDATE_NEW_POST_TEXT = 'Profile/onPostSubmit',
    SET_USER_PROFILE = 'Profile/onProfileChange'
}

export type AddPost = {type: ACTIONS_TYPE.ADD_POST}
export const AddPost = (): AddPost => ({type: ACTIONS_TYPE.ADD_POST})

export type UpdateNewPostText = {type: ACTIONS_TYPE.UPDATE_NEW_POST_TEXT, payload: string}
export const UpdateNewPostText = (text: string) => ({type: ACTIONS_TYPE.UPDATE_NEW_POST_TEXT, payload: text})


export type SetUserProfile = {type: ACTIONS_TYPE.SET_USER_PROFILE, payload?: profileType}
export const SetUserProfile = (profile?: profileType) => ({type: ACTIONS_TYPE.SET_USER_PROFILE, payload: profile})

export type ProfileReducerTypes = AddPost | SetUserProfile | UpdateNewPostText

export function useDispatch() {
    const dispatch = _useDispatch()
    return (ac: ProfileReducerTypes) => dispatch(ac)
}