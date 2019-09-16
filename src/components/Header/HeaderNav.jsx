import React from 'react';
import './HeaderNav.css';

const Nav = ()=>{
    return (
        <nav className="nav header__nav">
            <div className="nav__input">
                <input type="text" className="nav__search" placeholder="Ведіть пошук"/>
                <button className="btn nav__btn">Пошук</button>
            </div>
            <ul className="nav__list">
                <li className="nav__item"><a href="#" className="link nav__link">Моя сторінка</a ></li>
                <li className="nav__item"><a href="#" className="link nav__link">Стіна новин</a ></li>
                <li className="nav__item"><a href="#" className="link nav__link">Налаштування</a ></li>
                <li className="nav__item"><a href="#" className="link nav__link">Вийти</a ></li>
            </ul>
        
        </nav>
    )
}
export default Nav;