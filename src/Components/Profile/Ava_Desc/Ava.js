import React from 'react';
import c from './Ava.module.css';
import ava from './../../../img/tree.png';
import Preloader from "../../General/PreLoader/Preloader";

const Ava = (props) => {

    if(!props.ava)
    {
        return (
                <div className={c.ava_big_div}>
                    <div className={c.ava_div}>
                        <Preloader />
                    </div>
                </div>
            )

    }
    else
    {
        return (
            <div className={c.ava_big_div}>
                <div className={c.ava_div}>
                    <img src={props.ava.photos.large ? props.ava.photos.large : "/static/media/tree.c6f60dad.png"} />
                </div>
            </div>
        );
    }


}

export default Ava;