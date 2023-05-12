import React from 'react'
import s from './Header.module.css'
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
      <header className={s.headerContainer}>
        <div className={s.logoContainer}>
          <img src="logo.png" alt="Social Network Logo" className={s.logo} />
          <h1 className={s.logoName}>Social Network</h1>
        </div>
        <div className={s.loginContainer}>
          <button className={s.loginButton}>Login</button>
        </div>
      </header>
    );
  };

export default Header;