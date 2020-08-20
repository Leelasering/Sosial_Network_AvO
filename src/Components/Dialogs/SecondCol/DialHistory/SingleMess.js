import React from 'react';
import c from './DialHistory.module.css';


const SingleMess = (props) => {
    return (

        <div className={c.single_mess}>
            <div className={c.mess_ava}><img src="/static/media/tree.c6f60dad.png"/></div>
            <div className={c.autor_name}>{props.name}</div>
            <div className={c.mess_time}>{props.time} {props.date}</div>
            <div className={c.s_mess_text}>
                {props.text}
            </div>
        </div>


    );

}

// $('html').css('overflow','hidden');


export default SingleMess;