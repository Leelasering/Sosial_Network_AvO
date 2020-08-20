import React from 'react';
import c from './Friends.module.css';
import Post from "../../../Profile/My_post/Post";


const Friend = (props) => {
    return (
                <div className={c.singlefriend}>
                    <div className={c.ava}><img src="/static/media/tree.c6f60dad.png" /></div>
                    <p className={c.name}>{props.name}</p>
                </div>
    );

}

export default Friend;