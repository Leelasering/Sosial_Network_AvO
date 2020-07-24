import React from 'react';
import c from './FirstCol.module.css';
import DialName from "./DialName/DialName";



const FirstCol = (props) => {
    let dial_names = [
        {id: "1", name: 'Andrey Mohortov', text: 'Hello!', time: '17:00', mess: '4' },
        {id: '2', name: 'Igor Chebotar', text: 'Good bye', time: '17:34', mess: '1' },
        {id: '3', name: 'Maxim Smolentsev', text: 'How r u?', time: '13:00', mess: '2' },
        {id: '4', name: 'Sofia Jim', text: 'What r u doing?', time: '15:20', mess: '3' },
        {id: '5', name: 'Nikolay Agafonov', text: 'sdgsgsdg', time: '16:30', mess: '9' },
        {id: '6', name: 'Egor Greenenko', text: 'Hsdgsgs', time: '13:05', mess: '45' },
        {id: '7', name: 'Vera Barkova', text: 'Hsdgsgsdgsdg', time: '15:03', mess: '3' },
        {id: '8', name: 'Artem Sheglow', text: 'Hdgfdfhhfg', time: '13:08', mess: '6' },
        {id: '9', name: 'Vladimir Alipov', text: 'Hfghhfghfgh', time: '10:23', mess: '8' },
        {id: '10', name: 'Sasha Volk', text: 'Hfgfghfhfgh', time: '11:04', mess: '24' },
        {id: "11", name: 'Andrey Mohortov', text: 'Hello!', time: '17:00', mess: '4' },
        {id: '12', name: 'Igor Chebotar', text: 'Good bye', time: '17:34', mess: '1' },
        {id: '13', name: 'Maxim Smolentsev', text: 'How r u?', time: '13:00', mess: '2' },
        {id: '14', name: 'Sofia Jim', text: 'What r u doing?', time: '15:20', mess: '3' },
        {id: '15', name: 'Nikolay Agafonov', text: 'sdgsgsdg', time: '16:30', mess: '9' },
        {id: '16', name: 'Egor Greenenko', text: 'Hsdgsgs', time: '13:05', mess: '45' },
        {id: '17', name: 'Vera Barkova', text: 'Hsdgsgsdgsdg', time: '15:03', mess: '3' },
        {id: '18', name: 'Artem Sheglow', text: 'Hdgfdfhhfg', time: '13:08', mess: '6' },
        {id: '19', name: 'Vladimir Alipov', text: 'Hfghhfghfgh', time: '10:23', mess: '8' },
        {id: '20', name: 'Sasha Volk', text: 'Hfgfghfhfgh', time: '11:04', mess: '24' },
        {id: "21", name: 'Andrey Mohortov', text: 'Hello!', time: '17:00', mess: '4' },
        {id: '22', name: 'Igor Chebotar', text: 'Good bye', time: '17:34', mess: '1' },
        {id: '23', name: 'Maxim Smolentsev', text: 'How r u?', time: '13:00', mess: '2' },
        {id: '24', name: 'Sofia Jim', text: 'What r u doing?', time: '15:20', mess: '3' },
        {id: '25', name: 'Nikolay Agafonov', text: 'sdgsgsdg', time: '16:30', mess: '9' },
        {id: '26', name: 'Egor Greenenko', text: 'Hsdgsgs', time: '13:05', mess: '45' },
        {id: '27', name: 'Vera Barkova', text: 'Hsdgsgsdgsdg', time: '15:03', mess: '3' },
        {id: '28', name: 'Artem Sheglow', text: 'Hdgfdfhhfg', time: '13:08', mess: '6' },
        {id: '29', name: 'Vladimir Alipov', text: 'Hfghhfghfgh', time: '10:23', mess: '8' },
        {id: '30', name: 'Sasha Volk', text: 'Hfgfghfhfgh', time: '11:04', mess: '24' },
    ]

    let arr = dial_names
        .map( dialog =>  <DialName dialog_id = {dialog.id} name={dialog.name} text={dialog.text} time={dialog.time} mess={dialog.mess}/>)

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