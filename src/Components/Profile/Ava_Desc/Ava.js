import React from 'react';
import c from './Ava.module.css';
import ava from './../../../img/tree.png';

const Ava = () => {
    return (
        <div className={c.ava_big_div}>
        <div className={c.ava_div}>
            <img src={ava} />
        </div>
        </div>
    );

}

export default Ava;