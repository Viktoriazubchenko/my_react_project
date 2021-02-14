import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/app/App';
import store from './redux/state';
//import {addPost, addMessage, updateNewPost, subscribe} from './redux/state';
import {BrowserRouter} from 'react-router-dom';


export let rerenderEntireTree = () => {
  ReactDOM.render(
    <BrowserRouter>
      <App state={store.getState()} dispatch={store.dispatch.bind(store)} />
    </BrowserRouter>,
  document.getElementById('root')
);
}

rerenderEntireTree(store.getState());

store.subscribe(rerenderEntireTree);



