import React from 'react';
import Post from './Post';
import AddPost from './Add_post';
import c from './My_post.module.css';

const MyPost = () => {
    return (
        <div>
       
           <AddPost />
            <Post text = "123" l_count="234" name="FirstName LastName" date="20.07.2020"/>
            <Post text = "234" l_count="234" name="FirstName LastName" date="20.07.2020"/>
            <Post text = "345" l_count="234" name="FirstName LastName" date="20.07.2020"/>
            <Post text = "456" l_count="234" name="FirstName LastName" date="20.07.2020"/>
            <Post text = "567" l_count="234" name="FirstName LastName" date="20.07.2020"/>
        
        </div>
    );

}

export default MyPost;