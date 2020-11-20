import c from './Preloader.module.css';
import React from "react";


const Preloader = (props) => {
    return (
        <div className={c.box}>
            <div className={c.logo}>
                <div className={c.logo_border}></div>
                <div className={c.logo_circle}></div>
                <div className={c.logo_dot}></div>
            </div>
        </div>
    );

}

export default Preloader;