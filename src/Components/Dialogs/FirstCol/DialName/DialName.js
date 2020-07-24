import React from 'react';
import c from './DialName.module.css';
import {NavLink} from "react-router-dom";



const DialName = (props) => {
    return (
        <NavLink to={"/Dialogs/" + props.dialog_id} activeClassName={c.active}>
        <div className={c.dial_name_div}>
            <div className={c.dial_ava_div}> <div className={c.dial_ava}><img src="/static/media/tree.c6f60dad.png"/></div></div>
            <p className={c.dial_name}>{props.name}</p>
            <p className={c.dial_time}>{props.time}</p>
            <p className={c.dial_text}>{props.text}</p>
            <p className={c.mess_c}>{props.mess}</p>


        </div>
        </NavLink>
    );

}

export default DialName;