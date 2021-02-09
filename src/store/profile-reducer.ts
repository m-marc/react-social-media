import {ACTIONS_TYPE, ProfileReducerTypes} from "./profile-actions";

let initialState = {
    posts: [
        {id: 1, message: "What's up?", likesCount: 12},
        {id: 2, message: "You ain't mandalorian!", likesCount: 20},
        {id: 3, message: "Twitter sucks", likesCount: 10},
        {id: 4, message: "Try my best", likesCount: 11},
    ],
    newPostText: "This is new post",
    profile: undefined
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
    profile?: profileType
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
        default:
            return state
    }
}