import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import store from './components/redux/state';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

window.state = store;

const root = ReactDOM.createRoot(document.getElementById('root'));

let rerenderEntireTree = () => { 
  root.render(
    <Router>
      <React.StrictMode>
        <App state={store.getState()} dispatch={store.dispatch.bind(store)} />
      </React.StrictMode>
    </Router>
  );
};

rerenderEntireTree(store.getState());

store.subscribe(rerenderEntireTree)
