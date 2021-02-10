import {ACTIONS_TYPE, ProfileReducerTypes, SetUserProfile, SetUserStatus} from "./profile-actions";
import {ThunkAction} from "redux-thunk";
import {IGlobalState} from "./store";
import {API} from "../api/api";

let initialState = {
    posts: [
        {id: 1, message: "What's up?", likesCount: 12},
        {id: 2, message: "You ain't mandalorian!", likesCount: 20},
        {id: 3, message: "Twitter sucks", likesCount: 10},
        {id: 4, message: "Try my best", likesCount: 11},
    ],
    newPostText: "This is new post",
    profile: undefined,
    status: ""
}

type postsType = {
    id: number,
    message: string,
    likesCount: number
}

export type profileType = {
    userId: number
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    contacts: {
        github: string
        vk: string
        facebook: string
        instagram: string
        twitter: string
        website: string
        youtube: string
        mainLink: string
    }
    photos: {
        small: string
        large: string
    }
}

type profilePageType = {
    posts: postsType[],
    newPostText: string,
    profile?: profileType,
    status: string
}

export const profileReducer = (state: profilePageType = initialState, action: ProfileReducerTypes): profilePageType => {
    switch(action.type) {
        case ACTIONS_TYPE.ADD_POST:
            let newPost = {
                id: 5,
                message: state.newPostText,
                likesCount: 0
            }
            return {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: ""
            }
        case ACTIONS_TYPE.UPDATE_NEW_POST_TEXT:
            return {
                ...state,
                newPostText: action.payload
            }
        case ACTIONS_TYPE.SET_USER_PROFILE:
            return {
                ...state,
                profile: action.payload
            }
        case ACTIONS_TYPE.SET_USER_STATUS:
            return {
                ...state,
                status: action.payload
            }
        default:
            return state
    }
}

type ThunkType = ThunkAction<void, IGlobalState, unknown, ProfileReducerTypes>

export const getUserProfile = (userId: number | string): ThunkType => {
    return (dispatch => {
        API.getUserData(userId)
            .then(res => {
                dispatch(SetUserProfile(res.data))
            })
    })
}

export const getUserStatus = (userId: number | string): ThunkType => {
    return (dispatch => {
        API.getUserStatus(userId).then(res => {
            res.data === null ? dispatch(SetUserStatus("")) : dispatch(SetUserStatus(res.data))
        })
    })
}

export const updateStatus = (status: string): ThunkType => {
    return (dispatch => API.updateStatus(status)
            .then(res => {
                if (res.data.resultCode === 0)
                {
                    dispatch(SetUserStatus(status))
                }
                else {
                    console.log("Some error", res.data.messages)
                }
            })
    )
}