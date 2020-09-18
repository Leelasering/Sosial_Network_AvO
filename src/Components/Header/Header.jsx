import React from 'react';
import c from './Header.module.css';
import logo from './../../img/Logo.png';
import {NavLink} from "react-router-dom";

const Header = (props) => {
    return (
        <header className={c.header}>
            <p className={c.log_p}>Av</p>
            <div className={c.logo_img}><img src={logo} /></div>


            <div className={c.loginblock}>
                {
                    props.isAuth ?

                            <div className={c.login_link}>{props.login}</div>

                        :
                        <NavLink to={'/login'}>
                            <div className={c.login_link}>Login</div>
                        </NavLink>
                }



            </div>
           
         
        </header>
    );
    
}

export default Header;