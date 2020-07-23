import React from 'react';
import c from './SendMess.module.css';


const SecondCol = (props) => {
    return (


                <div className={c.send_mess_div}>
                    <textarea className={c.mess_text} placeholder="Write a message..."></textarea>
                    <button className={c.send_mess_btn}>Sub</button>

                </div>



    );

}

// $('html').css('overflow','hidden');


export default SecondCol;