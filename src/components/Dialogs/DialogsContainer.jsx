import React from 'react';
import s from './Dialogs.module.css';
import Dialogs from './Dialogs';
import {
  sendMessageCreator
} from '../redux/dialogs-reducer';
import { connect } from 'react-redux';
import { compose } from 'redux'
import { withAuthNavigate } from '../../hoc/withAuthNavigate';

const mapStateToProps = (state) => {
  return {
    dialogsPage: state.dialogsPage
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    sendMessage: (newMessageBody) => {
      dispatch(sendMessageCreator(newMessageBody));
    }
  };
};

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withAuthNavigate
  )(Dialogs)
