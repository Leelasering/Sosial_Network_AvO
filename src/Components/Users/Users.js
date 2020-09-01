import React from 'react';
import c from './Users.module.css';
import User from "./User";
import * as axios from "axios";


class Users extends React.Component {


    getUsers = () => {
        if (this.props.users.length === 0) {
            axios.get("https://social-network.samuraijs.com/api/1.0/users")
                         .then(response => {
                    this.props.setUsers(response.data.items)
                                });
        }
    }
    onPageChanged = (pageNumber) =>{
        this.props.setCurrentPage(pageNumber);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items)
            });
    }

    componentDidMount() {
        if (this.props.users.length === 0) {
            axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
                .then(response => {
                    this.props.setUsers(response.data.items)
                    this.props.setTotalUsersCount(response.data.totalCount)
                });
        }
    }
    

    render() {

        let  pagesCount = Math.ceil(this.props.totalUsersCount/this.props.pageSize);

        let pages = [];

        if(this.props.currentPage > 3){pages.push(1)};
        if(this.props.currentPage > 2){pages.push(this.props.currentPage-2)};
        if(this.props.currentPage > 1){pages.push(this.props.currentPage-1)};
        pages.push(this.props.currentPage);
        if(this.props.currentPage < pagesCount){pages.push(this.props.currentPage+1)};
        if(this.props.currentPage < pagesCount-1){pages.push(this.props.currentPage+2)};
        if(this.props.currentPage < pagesCount-2){pages.push(pagesCount)};


        this.arr = this.props.users.map(user => <User
            key={user.id}
            id={user.id}
            name={user.name}
            city={user.city}
            followed={user.followed}
            ava={user.ava}
            follow={this.props.follow}
            unfollow={this.props.unfollow}/>);

        this.btns_arr = pages.map(p =>
            <div className={this.props.currentPage === p ? c.selected_page : c.page_btn} onClick={(e)=>{this.onPageChanged(p)}}>{p}</div>
        )

        return (<div className={c.users_div}>
            <div className={c.users_list}>
                <div className={c.content_name}>
                    Users
                </div>
                <div className={c.small_users_list}>
                    <div className={c.sub_small_users_list}>
                        {this.arr}
                    </div>
                </div>
                <div className={c.pages_btn_div}>
                    {this.btns_arr}
                </div>
            </div>
            <div className={c.users_filtr}>
            </div>
        </div>);
    }
}

export default Users;

