import {useDispatch as _useDispatch} from "react-redux";
import {usersType} from "./users-reducer";

export enum ACTIONS_TYPE {
    IS_FOLLOWED = 'Users/FOLLOW_USER',
    GET_USERS = 'Users/GET_USERS',
    SET_CURRENT_PAGE = 'Users/onPageChanged',
    SET_TOTAL_USERS = 'Users/setTotalUsers',
    IS_LOADING = 'UsersContainer/toggleLoader'
}

export type FollowUser = {
    type: ACTIONS_TYPE.IS_FOLLOWED,
    payload: {
        userId: number,
        followed: boolean
    }
}

export const FollowUserAC = (userId: number, followed: boolean): FollowUser => {
    return {
        type: ACTIONS_TYPE.IS_FOLLOWED,
        payload: {userId, followed}
    }
}

export type GetUsers = {
    type: ACTIONS_TYPE.GET_USERS,
    payload: {
        users: Array<usersType>
    }
}

export const GetUsersAC = (users: usersType[]): GetUsers => {
    return {
        type: ACTIONS_TYPE.GET_USERS,
        payload: {users}
    }
}

export type SetCurrentPage = {
    type: ACTIONS_TYPE.SET_CURRENT_PAGE,
    payload:{
        page: number
    }
}

export const SetCurrentPageAC = (page:number): SetCurrentPage => {
    return {
        type: ACTIONS_TYPE.SET_CURRENT_PAGE,
        payload: {page}
    }
}

export type SetTotalUsers = {
    type: ACTIONS_TYPE.SET_TOTAL_USERS,
    payload: {
        totalCount: number
    }
}

export const SetTotalUsersAC = (totalCount: number): SetTotalUsers => {
    return {
        type: ACTIONS_TYPE.SET_TOTAL_USERS,
        payload: {totalCount}
    }
}

export type ToggleIsLoading = {
    type: ACTIONS_TYPE.IS_LOADING,
    payload: {
        isLoading: boolean
    }
}

export const ToggleIsLoading = (isLoading: boolean): ToggleIsLoading => {
    return { type: ACTIONS_TYPE.IS_LOADING, payload: {isLoading} }
}

export type UsersReducerTypes = FollowUser | GetUsers | SetCurrentPage | SetTotalUsers | ToggleIsLoading

export function useDispatch() {
    const dispatch = _useDispatch()
    return (ac: UsersReducerTypes) => dispatch(ac)
}