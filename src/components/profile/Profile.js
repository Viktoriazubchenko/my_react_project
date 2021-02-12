import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import classes from './Profile.module.css'
import ProfileCard from './ProfileCard/ProfileCard';

const Profile = () => {
    return ( 
        <div className={classes.content}>
            <ProfileCard/>
            <MyPosts/>
        </div>
    );
}
 
export default Profile;