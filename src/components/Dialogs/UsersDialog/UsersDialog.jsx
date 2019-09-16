import React from 'react';
import s from './UsersDialog.module.css';

const UsersDialog =()=>{
    return (
        <section className={s.UsersDialog}>
            <ul className={s.list}>
                <li className={s.item}>
                    <a href="#" className={s.link}>Vanilnil js</a>
                </li>
                <li className={s.item}>
                    <a href="#" className={s.link}>ES6</a>
                </li>
            </ul>
        </section>
    )
}
export default UsersDialog;