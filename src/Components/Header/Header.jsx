import React from 'react';
import c from './Header.module.css';
import logo from './../../img/Logo.png';

const Header = () => {
    return (
        <header className={c.header}>
            <p className={c.log_p}>Av</p>
            <div className={c.logo_img}><img src={logo} /></div>
           
         
        </header>
    );
    
}

export default Header;