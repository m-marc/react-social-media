import {useDispatch as _useDispatch} from "react-redux";

export enum ACTIONS_TYPE {
    SEND_MESSAGE = 'Dialogs/SEND_MESSAGE',
    UPDATE_TEXT_MSG = 'Dialogs/ONCHANGE_TEXT_INPUT',
}

export type SendMessage = {
    type: ACTIONS_TYPE.SEND_MESSAGE
}

export const SendMessageAC = (): SendMessage => {
    return {
        type: ACTIONS_TYPE.SEND_MESSAGE
    }
}

export type UpdateTextMsg = {
    type: ACTIONS_TYPE.UPDATE_TEXT_MSG,
    payload: {
        newBody: string
    }
}

export const UpdateMsgBodyAC = (newBody: string): UpdateTextMsg => {
    return {
        type: ACTIONS_TYPE.UPDATE_TEXT_MSG,
        payload: {newBody}
    }
}

export type DialogsReducersTypes = UpdateTextMsg | SendMessage

export function useDispatch() {
    const dispatch = _useDispatch()
    return (ac: DialogsReducersTypes) => dispatch(ac)
}