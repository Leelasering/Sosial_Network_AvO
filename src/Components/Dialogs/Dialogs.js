import React from 'react';
import c from './Dialogs.module.css';
import FirstCol from "./FirstCol/FirstCol";
import SecondCol from "./SecondCol/SecondCol";
import FirstColContainer from "./FirstCol/FirstColContainer";



const Dialogs = (props) => {


    return (
        <div className={c.dialog_page_div}>

           <FirstColContainer />
           <SecondCol />
        </div>
    );

}
//<div className={c.content_name}>
//             Dialog
//         </div>
export default Dialogs;