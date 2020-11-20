import React from 'react';
import c from './SendMess.module.css';
import {Field, reduxForm} from "redux-form";
import {SendMessTextArea} from "../../../General/FormsControls/FormsControls";
import {maxLength, requiredField} from "../../../../Utils/Validators/validators";

const maxLenght10 = maxLength(10)
const SendMessForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
                    <Field component={SendMessTextArea} name={"mess_text"}
                              placeholder="Write a message..."
                           validate={[maxLenght10,requiredField]}/>
            <button className={c.send_mess_btn}

            >Sub
            </button>
        </form>
    )
}

const SendMessReduxForm = reduxForm({form: 'sendmess'})(SendMessForm)

const SendMess = (props) => {

    const  SendMess = (values) => {
        props.sendMess(values.mess_text);
    }

    return (
        <div className={c.send_mess_div}>
            <SendMessReduxForm onSubmit={SendMess}/>
        </div>
    );
}



export default SendMess;