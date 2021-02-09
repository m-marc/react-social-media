import {IGlobalState} from "./store";

export interface IRootState extends IGlobalState{}

export const selectUsers = (state: IRootState) => state.users
export const selectDialogs = (state: IRootState) => state.dialogs
export const selectProfile = (state: IRootState) => state.profilePage
export const selectAuth = (state: IRootState) => state.auth