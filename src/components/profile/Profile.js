import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import classes from './Profile.module.css'
import ProfileCard from './ProfileCard/ProfileCard';

const Profile = (props) => {
    return ( 
        <div className={classes.content}>
            <ProfileCard/>
            <MyPosts posts={props.profilePage.posts} newPost={props.profilePage.newPost} dispatch={props.dispatch}/>
        </div>
    );
}
 
export default Profile;