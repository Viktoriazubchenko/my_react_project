import dialogsReducer from "./dialogsReducer";
import profileReducer from "./profileReducer";

const ADD_POST = 'ADD_POST';
const UPDATE_NEW_POST = 'UPDATE_NEW_POST';
const ADD_MESSAGE = 'ADD_MESSAGE';
const UPDATE_NEW_MESSAGE = 'UPDATE_NEW_MESSAGE';

let store = {

    getState(){
        return this._state
    },

     _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'Hi, how are you?', likesCount: 12},
                {id: 2, message: 'It\'s my first post', likesCount: 11},
                {id: 3, message: 'Blabla', likesCount: 11},
                {id: 4, message: 'Dada', likesCount: 11}
            ],
            newPost: ''
        },
        dialogsPage: {
            dialogs: [
                {id: 1, name: 'Dimych'},
                {id: 2, name: 'Andrew'},
                {id: 3, name: 'Sveta'},
                {id: 4, name: 'Sasha'},
                {id: 5, name: 'Viktor'},
                {id: 6, name: 'Valera'}
            ],
            messages: [
                {id: 1, message: 'Hi'},
                {id: 2, message: 'How is your it-kamasutra?'},
                {id: 3, message: 'Yo'},
                {id: 4, message: 'Yo'},
                {id: 5, message: 'Yo'}
            ],
            newMessagePost: ''
        },
        sidebar: {}
    },

    rerenderEntireTree (){
        console.log("State changed")
    },


    subscribe(observer){
        this.rerenderEntireTree = observer;
    },


    dispatch(action){
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this.rerenderEntireTree();
    }

}

// Action Creators

export const addPostAC = (postMessage) => {return{type: ADD_POST, postMessage: postMessage}};

export const updateNewPostAC = (newPost) => {return{type: UPDATE_NEW_POST, newPost: newPost}}

export const addMessageAC = (messageText) => {return{type: ADD_MESSAGE, messageText: messageText}};

export const updateNewMessageAC = (newText) => {return{type: UPDATE_NEW_MESSAGE, newText: newText}};

export default store;
window.store = store;


