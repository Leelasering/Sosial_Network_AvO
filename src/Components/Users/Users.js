import React from 'react';
import c from './Users.module.css';
import User from "./User";

const Users = (props) => {

    let  pagesCount = Math.ceil(props.totalUsersCount/props.pageSize);

    let pages = [];

    if(props.currentPage > 3){pages.push(1)};
    if(props.currentPage > 2){pages.push(props.currentPage-2)};
    if(props.currentPage > 1){pages.push(props.currentPage-1)};
    pages.push(props.currentPage);
    if(props.currentPage < pagesCount){pages.push(props.currentPage+1)};
    if(props.currentPage < pagesCount-1){pages.push(props.currentPage+2)};
    if(props.currentPage < pagesCount-2){pages.push(pagesCount)};

    let btns_arr = pages.map(p =>
        <div className={props.currentPage === p ? c.selected_page : c.page_btn} onClick={(e)=>{props.onPageChanged(p)}}>{p}</div>
    )
    let users_arr = props.users.map(user => <User
        key={user.id}
        id={user.id}
        name={user.name}
        city={user.city}
        followed={user.followed}
        ava={user.ava}
        follow={props.follow}
        unfollow={props.unfollow}/>);

    return (<div className={c.users_div}>
        <div className={c.users_list}>
            <div className={c.content_name}>
                Users
            </div>
            <div className={c.small_users_list}>
                <div className={c.sub_small_users_list}>
                    {users_arr}
                </div>
            </div>
            <div className={c.pages_btn_div}>
                {btns_arr}
            </div>
        </div>
        <div className={c.users_filtr}>
        </div>
    </div>);

}

export default Users;