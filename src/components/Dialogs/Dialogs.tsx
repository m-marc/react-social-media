import React from "react";
import s from "./Message.module.css";
import {NavLink} from "react-router-dom";
import {SendMessageAC, UpdateMsgBodyAC, useDispatch} from "../../redux/dialogs-actions";
import {useSelector} from "react-redux";
import {selectDialogs} from "../../redux/Selectors";

export const Dialog: React.FC = () => {

    const dispatch = useDispatch()
    const {dialogs, messages, newMessage} = useSelector(selectDialogs)

    const sendMessage = (e: React.MouseEvent<HTMLButtonElement>) => dispatch(SendMessageAC())

    const onChangeTextInput = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        let text = e.currentTarget.value
        dispatch(UpdateMsgBodyAC(text))
    }

    return (
        <div className={s.dialogWrapper}>
            <div className={s.dialogList}>
                {
                    dialogs.map(({_id, title}) => {
                        return <NavLink key={_id} to={`/messages/${_id}`} className={s.dialogItem}>
                            <span>{title}</span>
                        </NavLink>
                    })
                }
            </div>
            <div className={s.dialogActive}>
                {
                    messages.map(({message, _id}) => {
                        return <div className={s.messageWrapper} key={_id}>
                            <div className={s.messageText}>
                                {message}
                            </div>
                        </div>
                    })
                }
                <div>
                    <textarea value={newMessage} onChange={onChangeTextInput} placeholder={"Enter your message"}> </textarea>
                    <button onClick={sendMessage}>Send</button>
                </div>
            </div>
        </div>
    )
}
