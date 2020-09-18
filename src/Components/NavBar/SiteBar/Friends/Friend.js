import React from 'react';
import c from './Friends.module.css';
import Post from "../../../Profile/My_post/Post";
import {NavLink} from "react-router-dom";


const Friend = (props) => {
    return (
                <div className={c.singlefriend}>
                    <NavLink to={'/Profile/'+ props.id}>
                        <div className={c.ava}><img src="/static/media/tree.c6f60dad.png" /></div>
                    </NavLink>
                    <NavLink to={'/Profile/'+ props.id}>
                    <p className={c.name}>{props.name}</p>
                    </NavLink>
                </div>
    );

}

export default Friend;