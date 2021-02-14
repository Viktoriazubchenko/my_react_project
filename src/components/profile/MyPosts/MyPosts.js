import React from 'react';
import { addPostAC, updateNewPostAC } from '../../../redux/state';
import classes from './MyPosts.module.scss';
import Post from './Post/Post';

const MyPosts = (props) => {

    let newPostElement = React.createRef();

    let addPost = (event) => {
      event.preventDefault();
      let text = newPostElement.current.value;
      let action = addPostAC(text);
      props.dispatch(action);
    }

    let handleChange = () => {
      let text = newPostElement.current.value;
      let action = updateNewPostAC(text);
      props.dispatch(action);
    }
    
    let posts = props.posts.map((post) => <div key={post.id}><Post message={post.message} likesCount={post.likesCount}/></div>)
  return (
    <div className={classes.posts}>
      My posts
      <div>
        <textarea ref={newPostElement} value={props.newPost} onChange={handleChange}></textarea>
        <button onClick={addPost}>Add post</button>
      </div>
      <div className={classes.posts}>
        {posts}
      </div>
    </div>
  )
}

export default MyPosts;