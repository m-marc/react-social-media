import {ACTIONS_TYPE, UsersReducersTypes} from "./users-actions";

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
    isFetching: boolean
}

const initialState = {
    users: [],
    totalCount: 0,
    usersPerPage: 10,
    currentPage: 1,
    isFetching: false,
}

export const usersReducer = (state: usersState = initialState, action: UsersReducersTypes): usersState => {
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
        case ACTIONS_TYPE.IS_FETCHING:
            return {
                ...state,
                isFetching: action.payload.isFetching
            }
        default:
            return state
    }
}