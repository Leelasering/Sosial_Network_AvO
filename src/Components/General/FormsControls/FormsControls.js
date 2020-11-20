import React from "react";
import c from './FormsControls.module.css'


export const  AddPostTextArea = ({input, meta, ...props}) => {
const hasError = meta.submitFailed && meta.error;
    return(
        <div className={c.form_control +" "+ (hasError ? c.error : "" )}>
            {hasError && <div className={c.err_mess}>{meta.error}</div>}
            <textarea {...input}{...props}  className={c.post_text}>

            </textarea>
        </div>
    )
}

export const  SendMessTextArea = ({input, meta, ...props}) => {
    const hasError = meta.submitFailed && meta.error;


    return(
        <div className={c.form_control +" "+ (hasError ? c.error : "" )}>

            {hasError && <div className={c.dial_err_mess}>{meta.error}</div>}

            <textarea {...input}{...props}  className={c.mess_text}>

            </textarea>
        </div>
    )
}
export const  EmailInput = ({input, meta, ...props}) => {
    const hasError = meta.touched && meta.error;

    return(

        <div className={c.form_control+" "+ (hasError ? c.error : "" )}>
            {hasError && <div className={c.login_err_mess}>{meta.error}</div>}
            <input {...input}{...props} className={c.email_inp} />
        </div>
    )
}

export const  PassInput = ({input, meta, ...props}) => {
    const hasError = meta.touched && meta.error;

    return(

        <div className={c.form_control+" "+ (hasError ? c.error : "" )}>
            {hasError && <div className={c.login_err_mess}>{meta.error}</div>}
            <input {...input}{...props}  className={c.pass_inp}/>
        </div>
    )
}