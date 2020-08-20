import React from 'react';
import c from './SecondCol.module.css';
import DialHistory from "./DialHistory/DialHistory";
import DialName from "./DialName/DialName";
import SendMess from "./SendMess/SendMess";
import SendMessContainer from "./SendMess/SendMessContainer";
import DialHistoryContainer from "./DialHistory/DialHistoryContainer";


const SecondCol = (props) => {

    return (
        <div className={c.second_col}>
            <div className={c.big_dial_div}>
                <DialName />
                <DialHistoryContainer />
                <SendMessContainer />

            </div>
        </div>

    );

}

// $('html').css('overflow','hidden');


export default SecondCol;