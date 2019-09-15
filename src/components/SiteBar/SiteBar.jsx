import React from 'react';
import './SiteBar.css';


const SiteBar = ()=>{
    return (
        <aside className="siteBar">
            <nav className="siteBar__nav">
                <ul className="siteBar__list">
                    <li className="siteBar__item">
                        <a href="/myProfil" className="siteBar__link link">Мій профиль</a></li>
                    <li className="siteBar__item">
                        <a href="/dialogs" className="siteBar__link link">Повідомлення</a></li>
                    <li className="siteBar__item">
                    <a href="/news" className="siteBar__link link">Новини</a></li>
                    <li className="siteBar__item">
                        <a href="#" className="siteBar__link link">Моя діаспора</a></li>
                    <li className="siteBar__item">
                        <a href="#" className="siteBar__link link">АкунаМатата</a></li> 
                </ul>
            </nav>
            <div className="siteBar__none"></div>
        </aside>
    )
}

export default SiteBar;