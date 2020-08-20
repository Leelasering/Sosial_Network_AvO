import React from 'react';
import c from './FirstCol.module.css';
import DialName from "./DialName/DialName";




const FirstCol = (props) => {
    let dial_names=props.dial_names;

    let arr = dial_names
        .map( dialog =>  <DialName key = {dialog.id}
                                   dialog_id = {dialog.id}
                                   name={dialog.name}
                                   text={dialog.text}
                                   time={dialog.time}
                                   mess={dialog.mess}/>)

    return (
        <div className={c.first_col}>
            <input className={c.poisk_dial}/>
            <div className={c.dial_scrol_div}>
            <div className={c.dial_list}>
                {arr}
            </div>
            </div>

        </div>
    );

}

export default FirstCol;