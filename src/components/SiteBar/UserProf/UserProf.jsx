import React from 'react';
import { NavLink, BrowserRouter } from "react-router-dom";
import s from './UserProf.module.css';





const UserProf = (props) => {
    return (       
        <div className={s.userProf}>
            <img src={props.userImg} alt="User" className={s.avaUser} />
            <p className={s.UserName}>{props.userName}</p>
            <NavLink to="/myProfile" className={s.edit}>Редагувати</NavLink>
        </div>
    )
}

export default UserProf;