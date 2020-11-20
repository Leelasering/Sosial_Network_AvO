import React from 'react';
import c from './My_post.module.css';
import {Field, reduxForm} from "redux-form";
import {maxLength, requiredField} from "../../../Utils/Validators/validators";
import {AddPostTextArea} from "../../General/FormsControls/FormsControls";

const maxLenght10 = maxLength(10)

const AddPostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field component={AddPostTextArea} name={"post_text"}
                placeholder={"What is new?"}
                validate={[maxLenght10,requiredField]}
                />
                <button className={c.add_post_btn}>Submit</button>
        </form>
    )
}

const AddPostReduxForm = reduxForm({form: 'addpost'})(AddPostForm)

const AddPost = (props) => {

    const  addPost = (values) => {
        props.addPost(values.post_text);
    }

    return (<div className={c.MyPost_div}>
            <div className={c.add_post_div}>
                  <AddPostReduxForm onSubmit={addPost}/>
            </div></div>
    );

}
export default AddPost;