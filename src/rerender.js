
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/app/App';
//import state from './redux/state';
import {addPost, addMessage, updateNewPost} from './redux/state';
import {BrowserRouter} from 'react-router-dom';

export let rerenderEntireTree = (state) => {
    ReactDOM.render(
      <BrowserRouter>
        <App state={state} addPost={addPost} updateNewPost={updateNewPost} addMessage={addMessage} />
      </BrowserRouter>,
    document.getElementById('root')
  );
}