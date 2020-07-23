import React from 'react';
import c from './Profile.module.css';
import Ava from './Ava_Desc/Ava';
import Desc from './Ava_Desc/Description';
import MyPost from './My_post/My_post';


const Profile = () => {
    return (

            <div className={c.Ava_Desc}>

                <Ava />

                <div>
                <Desc />
                <MyPost />
                </div>

                </div>
           


    );

}

export default Profile;