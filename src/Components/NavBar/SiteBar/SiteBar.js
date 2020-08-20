import React from 'react';
import c from './SiteBar.module.css';
import Friends from "./Friends/Friends";
import Post from "../../Profile/My_post/Post";
import FriendsContainer from "./Friends/FriendsContainer";


const SiteBar = (props) => {

    return (
        <div className={c.sitebar}>
            < FriendsContainer />
        </div>

);

}

export default SiteBar;