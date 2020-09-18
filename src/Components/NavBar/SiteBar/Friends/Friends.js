import React from 'react';
import c from './Friends.module.css';
import Post from "../../../Profile/My_post/Post";
import Friend from "./Friend";


const Friends = (props) => {
let friends = props.friends;
    let arr = friends
        .map( friend =>  <Friend key = {friend.id} id = {friend.id} name = {friend.name}/>)
    return (
            <div className={c.friends}>
                <div className={c.friends_h}>Friends</div>
                <div className={c.friends_div}>
                    {arr}

                </div>

            </div>
    );

}

export default Friends;