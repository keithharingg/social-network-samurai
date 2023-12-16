import React from 'react';
import s from './ProfileInfo.module.css';
import Preloader from '../../common/Preloader/Preloader';
import ProfileStatusWithHooks from './ProfileStatusWithHooks';

const ProfileInfo = ({profile, status, updateStatus}) => {  
  if (!profile) {
    return <Preloader />
  }

    return (
      <div className={s.profileWrapper}>
        Profile Info
        {/* <div className={s.profileCover}>
          <img
            src="https://images.unsplash.com/photo-1511044568932-338cba0ad803?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
            alt="background"
          />
        </div> */}
        <div className={s.avatar}>
          <img
            src={profile.photos.large}
            alt="avatar"
          />
        </div>
        <div>Last Name</div>
        <ProfileStatusWithHooks status={status} updateStatus={updateStatus} />
      </div>
    );
  };
  
  export default ProfileInfo;
