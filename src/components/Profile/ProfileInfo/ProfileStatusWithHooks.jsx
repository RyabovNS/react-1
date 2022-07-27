// import s from './ProfileInfo.module.css';
// import Preloader from "../../common/Preloader/Preloader";
import React from 'react'

const ProfileStatusWithHooks = (props) => {

    const [editMode, setEditMode] = React.useState(false);
    const [status, setStatus] = React.useState(props.status);

    React.useEffect(() => {
        setStatus(props.status);
    }, [props.status]);

    const activateEditMode = () => {
        setEditMode(true);
    }

    const deactivateEditMode = () => {
        setEditMode(false);
        props.updateStatus(status);

    }

    const onStatusChange = (e) => {
        setStatus(e.currentTarget.value);
    }

    return (
        <div>
            {!editMode &&
                <div>
                    <b>status: </b> <span onDoubleClick={activateEditMode}>{props.status || "-------"}</span>
                </div>
            }
            {editMode &&
                <div>
                    <input onChange={onStatusChange}
                           autoFocus={true}
                           onBlur={deactivateEditMode}
                           value={status}/>
                </div>
            }
        </div>
    )
}

export default ProfileStatusWithHooks;