import React from 'react';
import { NavLink } from 'react-router-dom'; // Import NavLink from 'react-router-dom'
import s from './Navbar.module.css'; // Import CSS module file for navbar styling

const Navbar = () => {
  return (
    <nav className={s.navbarContainer}>
      <ul className={s.navbarList}>
        <li className={s.navbarItem}>
          <NavLink
            to="/profile"
            activeClassName={s.activeLink}
            className={s.navbarLink}
          >
            Profile
          </NavLink>
        </li>
        <li className={s.navbarItem}>
          <NavLink
            to="/users"
            activeClassName={s.activeLink}
            className={s.navbarLink}
          >
            Users
          </NavLink>
        </li>
        <li className={s.navbarItem}>
          <NavLink
            to="/dialogs"
            activeClassName={s.activeLink}
            className={s.navbarLink}
          >
            Messages
          </NavLink>
        </li>
        <li className={s.navbarItem}>
          <NavLink
            to="/music"
            activeClassName={s.activeLink}
            className={s.navbarLink}
          >
            Music
          </NavLink>
        </li>
        <li className={s.navbarItem}>
          <NavLink
            to="/news"
            activeClassName={s.activeLink}
            className={s.navbarLink}
          >
            News
          </NavLink>
        </li>
        <li className={s.navbarItem}>
          <NavLink
            to="/settings"
            activeClassName={s.activeLink}
            className={s.navbarLink}
          >
            Settings
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
