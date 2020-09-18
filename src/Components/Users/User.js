import React from 'react';
import c from './Users.module.css';
import {NavLink} from "react-router-dom";
import * as axios from "axios";
import {userAPI} from "../../API/api";

const User = (props) => {
    return (
        <div className={c.user_div}>
            <div className={c.user_ava_div}>
                <NavLink to={'/Profile/' + props.id}>
                    <div className={c.user_ava}>
                        <img src={props.ava ? props.ava : '/static/media/tree.c6f60dad.png'}/>
                    </div>
                </NavLink>

            </div>
            <NavLink to={'/Profile/' + props.id}>
                <p className={c.user_name}>{props.name}</p>
            </NavLink>
            <p className={c.user_city}>Kharkiv</p>

            {props.followed ?
                <button disabled={props.followingInProgress.some(id =>id == props.id)} onClick={() => {
                    props.toggleIsFollowingProgress(true,props.id);
                    userAPI.unfollow(props.id).then(data => {
                            if (data.resultCode == 0)
                            {
                                props.unfollow(props.id)
                            }
                        props.toggleIsFollowingProgress(false,props.id);
                        });
                }} className={c.user_fr}>Unollow</button>:


                <button disabled={props.followingInProgress.some(id =>id == props.id)} onClick={() => {
                    props.toggleIsFollowingProgress(true,props.id);
                    userAPI.follow(props.id).then(data => {
                            if (data.resultCode == 0)
                            {
                                props.follow(props.id)
                            }
                        props.toggleIsFollowingProgress(false,props.id);
                        });
                }} className={c.user_fr_foll}>Follow</button>}

        </div>
    );

}

export default User;