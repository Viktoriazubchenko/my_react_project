import React from 'react';
import classes from './Post.module.css';

const Post = (props) => {

  return (
    <div className={classes.item}>
      <img src='https://i.pinimg.com/originals/bd/70/22/bd702201a2b6d8960734f60f34a22754.jpg' />
        { props.message }
          <div>
        <span>♥️</span> { props.likesCount }
      </div>
    </div>
  )
}

export default Post;