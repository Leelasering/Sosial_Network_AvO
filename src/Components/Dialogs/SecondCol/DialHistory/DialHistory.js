import React from 'react';
import c from './DialHistory.module.css';
import SingleMess from "./SingleMess";
import DialName from "../../FirstCol/DialName/DialName";


const DialHistory = (props) => {

let messages = props.messages;
    let arr = messages
        .map( mess =>  <SingleMess key = {mess.id} text={mess.text} name={mess.name} time={mess.time} date={mess.date}/>)

    return (


        <div className={c.dial_histori_div}>
            <div className={c.mess_list}>
                {arr}

            </div>
        </div>


    );

}

// $('html').css('overflow','hidden');


export default DialHistory;