import React from 'react';
import c from './DialName.module.css';
import {NavLink} from "react-router-dom";



const DialName = (props) => {
    return (
        <NavLink to={props.dialog_id} activeClassName={c.active}>
        <div className={c.dial_name_div}>
            <div className={c.dial_ava_div}> <div className={c.dial_ava}><img src=""/></div></div>
            <p className={c.dial_name}>Firstname LastName</p>
            <p className={c.dial_time}>23:02</p>
            <p className={c.dial_text}>di al te xt di al te xt di al te xt </p>
            <p className={c.mess_c}>2</p>


        </div>
        </NavLink>
    );

}

export default DialName;