import React from 'react';
import classes from './ProfileCard.module.scss';

const ProfileCard = () => {
    return(
        <div>
            <div className={classes.profileCard}>
                <div className={classes.avatar}>
                    <img src='https://i.pinimg.com/originals/bd/70/22/bd702201a2b6d8960734f60f34a22754.jpg' alt='ava'/>
                </div>
                <div className={classes.name}>Vicky Zubchenko</div>
                <div className={classes.status}>I love SCSS and React</div>
                <button className={classes.button}>+</button>
            </div>
        </div>
    )
}

export default ProfileCard;