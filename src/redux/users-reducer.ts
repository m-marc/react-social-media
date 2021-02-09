import {
    ACTIONS_TYPE, FollowUserAC,
    GetUsersAC, SetCurrentPageAC,
    SetTotalUsersAC,
    ToggleIsLoading,
    UsersReducerTypes
} from "./users-actions";
import {API} from "../api/api";
import {ThunkAction} from "redux-thunk";
import {IGlobalState} from "./store";

export type usersType = {
    id: number,
    followed: boolean,
    status: string | null,
    name: string,
    photos: photos
}

export type photos = {
    small: string | null,
    large: string | null
}

export type usersState = {
    users: Array<usersType>,
    totalCount: number,
    usersPerPage: number,
    currentPage: number,
    isLoading: boolean,
}

const initialState = {
    users: [],
    totalCount: 0,
    usersPerPage: 10,
    currentPage: 1,
    isLoading: false,
}

export const usersReducer = (state: usersState = initialState, action: UsersReducerTypes): usersState => {
    switch (action.type) {
        case ACTIONS_TYPE.IS_FOLLOWED:
            return {
                ...state,
                users: state.users.map( u => (
                    u.id === action.payload.userId ?
                        {...u, followed: !action.payload.followed} : u) )
            }
        case ACTIONS_TYPE.GET_USERS:
            return {
                ...state,
                users: [...action.payload.users]
            }
        case ACTIONS_TYPE.SET_CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.payload.page
            }
        case ACTIONS_TYPE.SET_TOTAL_USERS:
            return {
                ...state,
                totalCount: action.payload.totalCount
            }
        case ACTIONS_TYPE.IS_LOADING:
            return {
                ...state,
                isLoading: action.payload.isLoading
            }
        default:
            return state
    }
}

type ThunkType = ThunkAction<void, IGlobalState, unknown, UsersReducerTypes>

export const getUsers = (page: number, pageSize: number): ThunkType => {
    return (dispatch => {
        dispatch(ToggleIsLoading(true))
        dispatch(SetCurrentPageAC(page))
        API.getUsers(page, pageSize)
            .then(res => {
                dispatch(ToggleIsLoading(false))
                dispatch(GetUsersAC(res.items))
                dispatch(SetTotalUsersAC(res.totalCount))
            })
    })
}

export const followUser = (userId: number, followed: boolean, btn: EventTarget & HTMLButtonElement): ThunkType => {
    return (dispatch => {
        btn.disabled = true
        if (!followed) {
            API.followUser(userId)
                .then(r => {
                    if(r.resultCode === 0) dispatch(FollowUserAC(userId, followed))
                    btn.disabled = false
                })
        } else {
            API.unFollowUser(userId)
                .then(r => {
                    if(r.resultCode === 0) dispatch(FollowUserAC(userId, followed))
                    btn.disabled = false
                })
        }
    })
}