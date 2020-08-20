import React from 'react';
import c from './SendMess.module.css';




const SendMess = (props) => {
    let newMessElement = React.createRef();

    let sendMess_ui = () => {
        props.sendMess();

    }
    let onMessChange = () => {
        let text = newMessElement.current.value;
        props.updateNewMessText(text);
    }

    return (
                <div className={c.send_mess_div}>
                    <textarea className={c.mess_text}
                              ref={newMessElement}
                              placeholder="Write a message..."
                              value={props.MessText}
                              onChange={onMessChange}/>
                    <button className={c.send_mess_btn}
                            onClick={sendMess_ui}
                    >Sub</button>

                </div>



    );

}

// $('html').css('overflow','hidden');


export default SendMess;