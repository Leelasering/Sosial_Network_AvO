import React from 'react';
import c from './DialHistory.module.css';
import SingleMess from "./SingleMess";
import DialName from "../../FirstCol/DialName/DialName";


const SecondCol = (props) => {
   let messages = [
        {id: '0', name: 'Anatoly Marginal', text: 'Hfdsf', time: '10:23', date: '23.07.2020' },
        {id: '1', name: 'Andrey Mohortov', text: 'Hello!', time: '17:00', date: '23.07.2020' },
        {id: '2', name: 'Igor Chebotar', text: 'Good bye', time: '17:34', date: '23.07.2020' },
        {id: '3', name: 'Maxim Smolentsev', text: 'How r u?', time: '13:00', date: '23.07.2020' },
        {id: '4', name: 'Sofia Jim', text: 'What r u doing?', time: '15:20', date: '23.07.2020' },
        {id: '5', name: 'Nikolay Agafonov', text: 'sdgsgsdg', time: '16:30', date: '23.07.2020' },
        {id: '6', name: 'Egor Greenenko', text: 'Hsdgsgs', time: '13:05', date: '23.07.2020' },
        {id: '7', name: 'Vera Barkova', text: 'Hsdgsgsdgsdg', time: '15:03', date: '23.07.2020' },
        {id: '8', name: 'Artem Sheglow', text: 'Hdgfdfhhfg', time: '13:08', date: '23.07.2020' },
        {id: '9', name: 'Vladimir Alipov', text: 'Hfghhfghfgh', time: '10:23', date: '23.07.2020' }
        ]

    let arr = messages
        .map( mess =>  <SingleMess text={mess.text} name={mess.name} time={mess.time} date={mess.date}/>)

    return (


        <div className={c.dial_histori_div}>
            <div className={c.mess_list}>
                {arr}

            </div>
        </div>


    );

}

// $('html').css('overflow','hidden');


export default SecondCol;