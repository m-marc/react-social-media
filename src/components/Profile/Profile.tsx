import React, {useEffect, useState} from "react"
import {profileType, updateStatus} from "../../redux/profile-reducer";
import Preloader from "../common/Preloader/Preloader";
import EditableSpan from "../common/EditableSpan/EditableSpan";
import {useDispatch} from "react-redux";

type profilePropsType = {
    profile?: profileType,
    status: string
}

export const Profile: React.FC<profilePropsType> = ({profile, status}) => {
    const [stateStatus, setStatus] = useState<string>(status)
    const dispatch = useDispatch()

    useEffect(() => {
        setStatus(status)
    }, [status])

    return <div>
        {
            profile ? <>
                <img src={profile.photos.small} alt={profile.fullName}/>
                <h1>{profile.fullName}</h1>
                {profile.lookingForAJob && <p>{profile.lookingForAJobDescription}</p>}
            </> : <Preloader />
        }
        <EditableSpan
            value={stateStatus}
            onChangeText={setStatus}
            spanProps={{children: stateStatus ? undefined : "Enter status..."}}
        />
    </div>
}