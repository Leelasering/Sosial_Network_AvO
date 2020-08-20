import React from 'react';
import c from './Users.module.css';
import User from "./User";
import * as axios from "axios";


const Users = (props) => {

    if (props.users.length === 0)
    {
        axios.get("https://social-network.samuraijs.com/api/1.0/users")
            .then(response=>{
                props.setUsers(response.data.items)
            });
    }

    let users = props.users;
    let arr = users
        .map(user => <User key={user.id}
                           id={user.id}
                           name={user.name}
                           city={user.city}
                           followed={user.followed}
                           ava={user.ava}
                           follow={props.follow}
                           unfollow={props.unfollow}/>)


    return (
        <div className={c.users_div}>
            <div className={c.users_list}>
                <div className={c.content_name}>
                    Users
                </div>
                <div className={c.small_users_list}>
                    <div className={c.sub_small_users_list}>
                        {arr}
                    </div>

                </div>


            </div>
            <div className={c.users_filtr}>

            </div>

        </div>
    );

}

export default Users;
