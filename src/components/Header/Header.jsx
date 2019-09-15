import React from 'react';
import './Header.css';
import Nav from './HeaderNav'

const Header=()=>{
  return(

    <header className="header">
      <div className="header__img">
        <img className="logo" src="http://milli-firka.org/storage/sections/new_mf_inform/110820/Diaspora.jpg" alt="Diaspora"></img>
      </div>
      <Nav />
    </header>
  )};

export default Header;