import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './components/redux/redux-store';

window.state = store
const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(
    <Router>
      <React.StrictMode>
       <Provider store={store}>
        <App />
       </Provider>
      </React.StrictMode>
    </Router>
  );


