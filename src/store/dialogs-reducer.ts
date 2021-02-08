import {ACTIONS_TYPE, DialogsReducersTypes} from "./dialogs-actions";
import {v1} from "uuid";

export type DialogsState = {
    dialogs: DialogsType[],
    messages: MessagesType[],
    newMessage: string
}

export type DialogsType = {
    _id: string,
    title: string,
}
export type MessagesType = {
    _id: string,
    message: string
}

const initialState = {
    dialogs: [
        {
            _id: v1(),
            title: "Max"
        },
        {
            _id: v1(),
            title: "Den"
        },
        {
            _id: v1(),
            title: "Alex"
        },
        {
            _id: v1(),
            title: "Common"
        },
    ],
    messages: [
        {_id: v1(), message: "Some msg"},
        {_id: v1(), message: "Some msg 2"},
        {_id: v1(), message: "Some msg 3"},
        {_id: v1(), message: "Some msg 4"},
    ],
    newMessage: ""
}

export const dialogsReducer = (state: DialogsState = initialState, action: DialogsReducersTypes): DialogsState => {
    switch (action.type) {
        case ACTIONS_TYPE.SEND_MESSAGE:
            let stateCopy = {...state}
            return {
                ...state,
                messages: [...state.messages, {_id: v1(), message: stateCopy.newMessage}],
                newMessage: ''
            }
        case ACTIONS_TYPE.UPDATE_TEXT_MSG:
            return {
                ...state,
                newMessage: action.payload.newBody
            }
        default:
            return state
    }
}