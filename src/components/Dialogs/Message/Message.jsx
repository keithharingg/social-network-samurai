import React from 'react';
import s from '../Dialogs.module.css';
import dialogsReducer from '../../redux/dialogs-reducer';

const Message = (props) => {
  let message = props.message;

  return <div className={s.message}>{message}</div>;
};

export default Message;
