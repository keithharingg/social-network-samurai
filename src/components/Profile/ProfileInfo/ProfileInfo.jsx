import React from 'react';
import s from './ProfileInfo.module.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const ProfileInfo = (props) => {
    return (
      <div className={s.profileWrapper}>
        Profile Info
        <div className={s.profileCover}>
          <img
            src="https://images.unsplash.com/photo-1511044568932-338cba0ad803?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
            alt="background"
          />
        </div>
        <div className={s.avatar}>
          <img
            src="https://images.unsplash.com/profile-fb-1511044509-074c13187995.jpg?dpr=2&auto=format&fit=crop&w=150&h=150&q=60&crop=faces&bg=fff"
            alt="avatar"
          />
          <div>Ludemeula Fernandes</div>
        </div>
      </div>
    );
  };
  
  export default ProfileInfo;
