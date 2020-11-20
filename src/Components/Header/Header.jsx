import React from 'react';
import c from './Header.module.css';
import logo from './../../img/Logo.png';
import {NavLink} from "react-router-dom";
import logout_img from './logout.png';

const Header = (props) => {
    return (
        <header className={c.header}>
            <p className={c.log_p}>Av</p>
            <div className={c.logo_img}><img src={logo} /></div>


            <div className={c.loginblock}>
                {
                    props.isAuth ?
                        <NavLink to={'/Login'}>
                            <div className={c.name_exit_img_div}>
                                <div className={c.login_link}>{props.login}</div>
                                <button className={c.exit_img} onClick={props.logoutThunkCreator}>
                                    <img src={logout_img}/>
                                </button>
                            </div>
                        </NavLink>
                        :
                        <NavLink to={'/Login'}>
                            <div className={c.login_link}>Login</div>
                        </NavLink>
                }



            </div>
           
         
        </header>
    );
    
}

export default Header;