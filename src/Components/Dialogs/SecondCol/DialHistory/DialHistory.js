import React from 'react';
import c from './DialHistory.module.css';
import SingleMess from "./SingleMess";


const SecondCol = (props) => {
    return (


        <div className={c.dial_histori_div}>
            <div className={c.mess_list}>

                <SingleMess />
                <SingleMess />
                <SingleMess />
                <SingleMess />
                <SingleMess />
                <SingleMess />
                <SingleMess />
                <SingleMess />
                <SingleMess />
                <SingleMess />


            </div>
        </div>


);

}

// $('html').css('overflow','hidden');


export default SecondCol;