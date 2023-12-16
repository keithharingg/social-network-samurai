import React from 'react';
import s from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import MyPostsContainer from '../MyPosts/MyPostsContainer';

const Profile = (props) => {
  return (
    <div className={s.profileWrapper}>
      <ProfileInfo
        profile={props.profile}
        status={props.status}
        updateStatus={props.updateStatus}
      />{' '}
      {/* props without "this", cause it's not a class component */}
      <MyPostsContainer store={props.store} />
    </div>
  );
};

export default Profile;
