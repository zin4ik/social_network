import React from 'react';
import { NavLink } from "react-router-dom";
import s from './UsersDialog.module.css';


const UsersDialog =(props)=>{
    return (
        <section className={s.UsersDialog}>
            <ul className={s.list}>
                <li className={s.item}>
                    <NavLink to={'/dialogs/'+props.id} className={s.link}>{props.name}</NavLink>
                </li>
            </ul>
        </section>
    )
}
export default UsersDialog;