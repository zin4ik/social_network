import React from 'react';
import { NavLink } from "react-router-dom";
import './SiteBar.css';


const SiteBar = () => {
    return (
        <aside className="siteBar">
            <nav className="siteBar__nav">
                <ul className="siteBar__list">
                    <li className="siteBar__item">
                        <NavLink to="/myProfil" className="siteBar__link link">Мій профиль</NavLink></li>
                    <li className="siteBar__item">
                        <NavLink to="/dialogs" className="siteBar__link link">Повідомлення</NavLink></li>
                    <li className="siteBar__item">
                        <NavLink to="/news" className="siteBar__link link">Новини</NavLink></li>
                    <li className="siteBar__item">
                        <NavLink to="#" className="siteBar__link link">Моя діаспора</NavLink></li>
                    <li className="siteBar__item">
                        <NavLink to="#" className="siteBar__link link">АкунаМатата</NavLink></li>
                </ul>
            </nav>
            <div className="siteBar__none"></div>
        </aside>
    )
}

export default SiteBar;