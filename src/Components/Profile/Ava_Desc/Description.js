import React from 'react';
import c from './Description.module.css';


const Desc = () => {
    return (
        <div className={c.desc_div}>

            <div className={c.name}>FirstName LastName</div>



            <div className={c.desc_p_div}> <p className={c.p_1}>description:</p> <p className={c.p_2}>value</p> </div>
            <div className={c.desc_p_div}> <p className={c.p_1}>description:</p> <p className={c.p_2}>value</p> </div>
            <div className={c.desc_p_div}> <p className={c.p_1}>description:</p> <p className={c.p_2}>value</p> </div>
            <div className={c.desc_p_div}> <p className={c.p_1}>description:</p> <p className={c.p_2}>value</p> </div>
            <div className={c.desc_p_div}> <p className={c.p_1}>description:</p> <p className={c.p_2}>value </p> </div>
           
        </div>
    );

}

export default Desc;