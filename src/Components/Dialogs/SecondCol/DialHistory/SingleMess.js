import React from 'react';
import c from './DialHistory.module.css';


const SecondCol = (props) => {
    return (

                        <div className={c.single_mess}>
                            <div className={c.mess_ava}><img src=""/></div>
                            <div className={c.autor_name}>FirstName LastName</div>
                            <div className={c.mess_time}>21:27 22.07.2020</div>
                            <div className={c.s_mess_text}>
                                m e s s t e x t m e s s t e x t m e s s t e x t m e s s t e x t m e s s t e x t
                                m e s s t e x t m e s s t e x t m e s s t e x t m e s s t e x t m e s s t e x t
                                m e s s t e
                            </div>
                        </div>



    );

}

// $('html').css('overflow','hidden');


export default SecondCol;