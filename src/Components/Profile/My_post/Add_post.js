import React from 'react';

import c from './My_post.module.css';

const AddPost = () => {
    return (<div className={c.MyPost_div}>
                <div className={c.add_post_div}>
                    <textarea maxLength="2000" placeholder="What is new?" className={c.post_text}></textarea>
                    <button className={c.add_post_btn}>Submit</button>
        </div></div>
    );

}

export default AddPost;