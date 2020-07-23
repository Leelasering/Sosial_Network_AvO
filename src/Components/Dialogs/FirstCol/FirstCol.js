import React from 'react';
import c from './FirstCol.module.css';
import DialName from "./DialName/DialName";



const FirstCol = (props) => {
    return (
        <div className={c.first_col}>
            <input className={c.poisk_dial}/>
            <div className={c.dial_scrol_div}>
            <div className={c.dial_list}>
                <DialName dialog_id = "/Dialogs/1"  />
                <DialName dialog_id = "/Dialogs/2"  />
                <DialName dialog_id = "/Dialogs/3"  />
                <DialName dialog_id = "/Dialogs/4"  />
                <DialName dialog_id = "/Dialogs/5"  />
                <DialName dialog_id = "/Dialogs/6"  />
                <DialName dialog_id = "/Dialogs/7"  />
                <DialName dialog_id = "/Dialogs/8"  />
                <DialName dialog_id = "/Dialogs/9"  />
                <DialName dialog_id = "/Dialogs/10" />
                <DialName dialog_id = "/Dialogs/11" />
                <DialName dialog_id = "/Dialogs/12" />
                <DialName dialog_id = "/Dialogs/13" />
                <DialName dialog_id = "/Dialogs/14" />
                <DialName dialog_id = "/Dialogs/15" />
                <DialName dialog_id = "/Dialogs/16" />
                <DialName dialog_id = "/Dialogs/17" />
                <DialName dialog_id = "/Dialogs/18" />
                <DialName dialog_id = "/Dialogs/19" />
                <DialName dialog_id = "/Dialogs/20" />
                <DialName dialog_id = "/Dialogs/21" />
                <DialName dialog_id = "/Dialogs/22" />
                <DialName dialog_id = "/Dialogs/23" />
                <DialName dialog_id = "/Dialogs/24" />
                <DialName dialog_id = "/Dialogs/25" />
                <DialName dialog_id = "/Dialogs/26" />
                <DialName dialog_id = "/Dialogs/27" />
                <DialName dialog_id = "/Dialogs/28" />
                <DialName dialog_id = "/Dialogs/29" />
                <DialName dialog_id = "/Dialogs/30" />

            </div>
            </div>

        </div>
    );

}

export default FirstCol;