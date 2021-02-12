import React from 'react';
import classes from './MyPosts.module.scss';
import Post from './Post/Post';

const MyPosts = (props) => {
    
    let postsData = [
        {id: 1, message: 'Hi, how are you?', likesCount: 12},
        {id: 2, message: 'It\'s my first post', likesCount: 11},
        {id: 3, message: 'Blabla', likesCount: 11},
        {id: 4, message: 'Dada', likesCount: 11}
    ]

    let posts = postsData.map((post) => <div key={post.id}><Post message={post.message} likesCount={post.likesCount}/></div>)
  return (
    <div className={classes.posts}>
      My posts
      <div>
        <textarea></textarea>
        <button>Add post</button>
      </div>
      <div className={classes.posts}>
        {posts}
      </div>
    </div>
  )
}

export default MyPosts;