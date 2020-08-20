import React from 'react';
import c from './My_post.module.css';



const AddPost = (props) => {

    let newPostElement = React.createRef();


    let addPost_ui = () => {
       props.addPost();
    }
    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.updateNewPostText(text);
    }



    return (<div className={c.MyPost_div}>
                <div className={c.add_post_div}>
                    <textarea
                        onChange={onPostChange}
                        ref={newPostElement}
                        placeholder="What is new?"
                        className={c.post_text}
                        value={props.PostText}/>
                    <button className={c.add_post_btn} onClick={addPost_ui}>Submit</button>
        </div></div>
    );

}

export default AddPost;