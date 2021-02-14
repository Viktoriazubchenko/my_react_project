const ADD_MESSAGE = 'ADD_MESSAGE';
const UPDATE_NEW_MESSAGE = 'UPDATE_NEW_MESSAGE';



let initialState = {
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
}

const dialogsReducer = (state, action) => {
    switch(action.type){

        case ADD_MESSAGE:
            let newMessage = {
                id: 6, 
                message: action.messageText
            }
            state.messages.unshift(newMessage);
            state.newMessagePost = '';
            return state;
        case UPDATE_NEW_MESSAGE:
            state.newMessagePost = action.newText;
            return state;
        default:
            return state;
    }
}

export default dialogsReducer;

export const addMessageAC = (messageText) => {return{type: ADD_MESSAGE, messageText: messageText}};
export const updateNewMessageAC = (newText) => {return{type: UPDATE_NEW_MESSAGE, newText: newText}};