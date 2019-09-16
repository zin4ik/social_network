import React from 'react';
import { NavLink } from "react-router-dom";
import s from'./SiteBar.module.css';
import UserProf from './UserProf/UserProf';


let img ="https://avatarko.ru/img/kartinka/8/prikol_belka_molnii_7116.jpg";
let userName = "Гриша Г.";

const SiteBar = () => {
    return (
        <aside className={s.siteBar}>
            <UserProf userImg={img} userName={userName} />
            <nav className={s.nav}>
                <ul className={s.list}>
                    <li className={s.item}>
                        <NavLink to="/myProfil" className={s.link} activeClassName={s.active}>Мій профиль</NavLink></li>
                        <li className={s.item}>
                        <NavLink to="/dialogs" className={s.link} activeClassName={s.active}>Повідомлення</NavLink></li>
                    <li className={s.item}>
                        <NavLink to="/news" className={s.link} activeClassName={s.active} >Новини</NavLink></li>
                    <li className={s.item}>
                        <NavLink to="#" className={s.link} activeClassName={s.active} >Моя діаспора</NavLink></li>
                    <li className={s.item}>
                        <NavLink to="#" className={s.link} activeClassName={s.active} >АкунаМатата</NavLink></li>
                </ul>
            </nav>
            <div className={s.none}></div>
        </aside>
    )
}

export default SiteBar;