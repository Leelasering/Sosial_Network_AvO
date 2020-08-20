import React from 'react';
import c from './Users.module.css';

const User = (props) => {
    return (
            <div className={c.user_div}>
                <div className={c.user_ava_div}>
                    <div className={c.user_ava}>
                        <img src={props.ava ? props.ava : '/static/media/tree.c6f60dad.png'} />
                    </div>
                </div>
                <p className={c.user_name}>{props.name}</p>
                <p className={c.user_city}>Kharkiv</p>
                {props.followed
                    ? <button onClick={()=>{

                        props.unfollow(props.id)}}  className={c.user_fr}>Unfollow</button> :
                    <button onClick={()=>{

                        props.follow(props.id)}} className={c.user_fr_foll}>Follow</button>}

            </div>
    );

}

export default User;