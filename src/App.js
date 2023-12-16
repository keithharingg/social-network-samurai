import React, { Component } from 'react';
import './App.css';
import HeaderContainer from './components/Header/HeaderContainer';
import Navbar from './components/Navbar/Navbar';
import News from './components/News/News';
import Music from './components/Music/Music';
import Login from './components/Login/Login';
import Settings from './components/Settings/Settings';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer, { withRouter } from './components/Profile/ProfileContainer';
import {initializeApp} from './components/redux/app-reducer'
import { connect } from 'react-redux';
import {compose} from 'redux'
import Preloader from './components/common/Preloader/Preloader';

class App extends Component {
  componentDidMount() {
    this.props.initializeApp()
  }

  render() {
    if (!this.props.initialized) {
      return <Preloader />
    }

    return (
      <div className="appWrapper">
        <HeaderContainer /> 
        <Navbar />
        <div className="appWrapperContent">
          <Routes>
            <Route
              path="/profile/:userId?"
              element={<ProfileContainer />}
            />
            <Route
              path="/dialogs/*"
              element={<DialogsContainer store={this.props.store} />}
            />
            <Route
              path="/users/*"
              element={<UsersContainer />}
            />
            <Route path="/news" element={<News />} />
            <Route path="/music" element={<Music />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  initialized: state.app.initialized
})

export default compose(
  withRouter,
connect(mapStateToProps, {initializeApp}))(App)
