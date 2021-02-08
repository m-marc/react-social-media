import React, {useEffect} from 'react'
import {
    FollowUserAC,
    GetUsersAC,
    SetCurrentPageAC,
    SetTotalUsersAC,
    ToggleIsFetchingAC,
    useDispatch
} from "../../store/users-actions"
import {useSelector} from "react-redux";
import {selectUsers} from "../../store/Selectors";
import axios from "axios";
import Users from "./Users";
import Preloader from "../common/Preloader/Preloader";

const UsersContainer: React.FC = () => {
    const dispatch = useDispatch()
    const {users, totalCount, usersPerPage, currentPage, isFetching} = useSelector(selectUsers)

    const onFollowHandle = (userId: number, followed: boolean) => dispatch(FollowUserAC(userId, followed))
    const onPageChanged = (page: number) => {
        toggleLoader(true)
        dispatch(SetCurrentPageAC(page))
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${usersPerPage}`)
            .then(res => {
                toggleLoader(false)
                dispatch(GetUsersAC(res.data.items))
            })
    }
    const toggleLoader = (status: boolean) => dispatch(ToggleIsFetchingAC(status))

    useEffect(() => {
        toggleLoader(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${currentPage}&count=${usersPerPage}`)
            .then(res => {
                toggleLoader(false)
                dispatch(GetUsersAC(res.data.items))
                dispatch(SetTotalUsersAC(res.data.totalCount))
            })
    }, [])

    return (
        <>
            {isFetching
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