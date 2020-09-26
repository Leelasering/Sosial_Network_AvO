import React from 'react';
import c from './Profile.module.css';
import Ava from './Ava_Desc/Ava';
import Desc from './Ava_Desc/Description';
import MyPost from './My_post/My_post';
import {UpdateNewPostText} from "../../Redux/Store";
import MyPostContainer from "./My_post/My_post_container";
import {Redirect} from "react-router-dom";


const Profile = (props) => {


        return (

            <div className={c.Ava_Desc}>
                <Ava ava={props.profile}/>
                <div>
                    <Desc profile={props.profile}/>
                    <MyPostContainer/>
                </div>

            </div>
        );

}

export default Profile;