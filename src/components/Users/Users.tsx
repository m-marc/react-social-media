import React from 'react'
import {usersType} from "../../store/users-reducer";
import userIcon from "../../assets/img/user-icon-placeholder.png"
import s from "./Users.module.css";
import {NavLink} from "react-router-dom";

type usersPropsType = {
    users: usersType[],
    onFollowCallback: (userId: number, followed: boolean) => void,
    usersPerPage: number,
    totalCount: number,
    currentPage: number,
    onPageChanged: (page: number) => void
}

const Users: React.FC<usersPropsType> = (props) => {
    const {users, totalCount, usersPerPage, onFollowCallback, currentPage, onPageChanged} = props
    let totalUsers = Math.ceil(totalCount/usersPerPage)
    let pageNumbers: Array<number> = []
    for (let i = 1 ; i <= totalUsers; i++ ) {
        pageNumbers.push(i)
    }
    return ( <>
            <div>
                { pageNumbers.map( btn => <button key={`b-${btn}`}
                    onClick={(e) => {onPageChanged(btn)}}
                    className={currentPage === btn ? s.active : ""}>
                    {btn}
                </button>) }
            </div>
            <div>
                {
                    users.map( (u) => <div key={u.id}>
                        <div className={s["user-logo"]}>
                            <NavLink to={`/profile/${u.id}`}><img src={u.photos.small !== null ? u.photos.small : userIcon} alt=""/></NavLink>
                            <button onClick={() => {onFollowCallback(u.id, u.followed)}}>{u.followed ? "Unfollow" : "Follow"}</button>
                        </div>
                        <div>
                            <div>
                                <h2>{u.name}</h2>
                                <p>{u.status}</p>
                            </div>
                        </div>
                    </div>)
                }
            </div>
        </>
    )
}

export default Users