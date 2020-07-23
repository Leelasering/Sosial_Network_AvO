import React from 'react';

import c from './My_post.module.css';

const Post = (props) => {
    return (

        <div className={c.Post_div}>
            <div className={c.post_avtor}>
                <div className={c.ava}><img src=""/></div>
                <div>
                    <p className={c.name}> {props.name} </p>
                    <p className={c.date}> {props.date} </p>
                </div>
            </div>
            <p className={c.post_text_p}> {props.text} </p>
            <div className={c.like_div}>Like ({props.l_count})</div>

        </div>

    );

}

export default Post;