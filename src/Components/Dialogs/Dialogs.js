import React from 'react';
import c from './Dialogs.module.css';
import SecondCol from "./SecondCol/SecondCol";
import FirstColContainer from "./FirstCol/FirstColContainer";
import {Redirect} from "react-router-dom";



const Dialogs = (props) => {


        return (
            <div className={c.dialog_page_div}>

                <FirstColContainer/>
                <SecondCol/>
            </div>
        );


}
export default Dialogs;