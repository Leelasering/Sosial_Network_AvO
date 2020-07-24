import React from 'react';
import Post from './Post';
import AddPost from './Add_post';
import c from './My_post.module.css';
import SingleMess from "../../Dialogs/SecondCol/DialHistory/SingleMess";

const MyPost = () => {
    let posts = [
        {id: '0', name: 'Anatoly Marginal', text: 'Hfdsf', l_count:"121", date: '23.07.2020' },
        {id: '1', name: 'Andrey Mohortov', text: 'Hello!', l_count:"121", date: '23.07.2020' },
        {id: '2', name: 'Igor Chebotar', text: 'Good bye', l_count:"11",  date: '23.07.2020' },
        {id: '3', name: 'Maxim Smolentsev', text: 'How r u?', l_count:"11",  date: '23.07.2020' },
        {id: '4', name: 'Sofia Jim', text: 'What r u doing?', l_count:"131", date: '23.07.2020' },
        {id: '5', name: 'Nikolay Agafonov', text: 'sdgsgsdg', l_count:"13",  date: '23.07.2020' },
        {id: '6', name: 'Egor Greenenko', text: 'Hsdgsgs', l_count:"121", date: '23.07.2020' },
        {id: '7', name: 'Vera Barkova', text: 'Hsdgsgsdgsdg', l_count:"123", date: '23.07.2020' },
        {id: '8', name: 'Artem Sheglow', text: 'Hdgfdfhhfg', l_count:"123", date: '23.07.2020' },
        {id: '9', name: 'Vladimir Alipov', text: 'Hfghhfghfgh', l_count:"12",  date: '23.07.2020' }

    ]
    let arr = posts
        .map( post =>   <Post text ={post.text} l_count={post.l_count} name={post.name} date={post.date}/>)
    return (
        <div>
       
           <AddPost />
            {arr}


        
        </div>
    );

}

export default MyPost;