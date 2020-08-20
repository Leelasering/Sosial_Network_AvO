import React from 'react';
import Post from './Post';
import AddPost from './Add_post';
import c from './My_post.module.css';
import SingleMess from "../../Dialogs/SecondCol/DialHistory/SingleMess";
import AddPostContainer from "./Add_post_container";

const MyPost = (props) => {
    let posts = props.posts;
    let arr = posts
        .map( post =>   <Post key = {post.id} text ={post.text} l_count={post.l_count} name={post.name} date={post.date}/>)
    return (
        <div>
       
           <AddPostContainer />
            {arr}


        
        </div>
    );

}

export default MyPost;