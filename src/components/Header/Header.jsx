import React from 'react';
import s from './Header.module.css';
import { NavLink } from 'react-router-dom';

const Header = (props) => {
  return (
    <header className={s.headerContainer}>
      <div className={s.logoContainer}>
        <img src="logo.png" alt="Social Network Logo" className={s.logo} />
        <h1 className={s.logoName}>Samurai Network</h1>
      </div>
      <div className={s.loginContainer}>
        {props.isAuth ? (
          <div>{props.login} - <button onClick={props.logout}>Log Out</button></div>
        ) : (
          <NavLink to={'/login'}>
            <button className={s.loginButton}>Login</button>
          </NavLink>
        )}
      </div>
    </header>
  );
};

export default Header;
