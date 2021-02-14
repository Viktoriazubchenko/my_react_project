const initialState = {
        posts: [
            {id: 1, message: 'Hi, how are you?', likesCount: 12},
            {id: 2, message: 'It\'s my first post', likesCount: 11},
            {id: 3, message: 'Blabla', likesCount: 11},
            {id: 4, message: 'Dada', likesCount: 11}
        ],
        newPost: ''
}

const ADD_POST = 'ADD_POST';
const UPDATE_NEW_POST = 'UPDATE_NEW_POST';

const profileReducer = (state, action) => {
    switch(action.type){
        case ADD_POST:
            let newPost = {
                id: 5,
                message: action.postMessage,
                likesCount: 0
            }
            state.posts.unshift(newPost);
            state.newPost = '';
            return state;
        case UPDATE_NEW_POST:
            state.newPost = action.newText;
            return state;
        default:
            return state;

    }
}

export const addPostAC = (postMessage) => {return{type: ADD_POST, postMessage: postMessage}};

export const updateNewPostAC = (newPost) => {return{type: UPDATE_NEW_POST, newPost: newPost}}

export default profileReducer;