import React, {useEffect} from 'react'
import {useSelector, useDispatch} from "react-redux";
import {selectUsers} from "../../redux/Selectors";
import Users from "./Users";
import Preloader from "../common/Preloader/Preloader";
import {followUser, getUsers} from "../../redux/users-reducer";

const UsersContainer: React.FC = () => {
    const dispatch = useDispatch()
    const {users, totalCount, usersPerPage, currentPage, isLoading} = useSelector(selectUsers)

    const onFollowHandle = (userId: number, followed: boolean, btn: EventTarget & HTMLButtonElement) => {
        dispatch(followUser(userId, followed, btn))
    }
    const onPageChanged = (page: number) => dispatch(getUsers(page, usersPerPage))

    useEffect(() => {
        dispatch(getUsers(currentPage, usersPerPage))
    }, [])

    return (
        <>
            {isLoading
                ? <Preloader />
                : <Users
                    users={users}
                    onFollowCallback={onFollowHandle}
                    onPageChanged={onPageChanged}
                    totalCount={totalCount}
                    usersPerPage={usersPerPage}
                    currentPage={currentPage}
            />}
        </>
    )
}

export default UsersContainer