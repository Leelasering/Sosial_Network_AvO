import React from 'react';
import c from './NavBar.module.css';
import {NavLink} from "react-router-dom";

const NavBar = () => {
    return (
        <nav className={c.nav}>
            <NavLink to="/Profile" activeClassName={c.active}>
                <div>Profile</div>
            </NavLink>
            <NavLink to="/Dialogs" activeClassName={c.active}>
                <div>Messeges</div>
            </NavLink>
            <NavLink to="/News" activeClassName={c.active}>
                <div>News</div>
            </NavLink>
            <NavLink to="/Music" activeClassName={c.active}>
                <div>Music</div>
            </NavLink>
            <NavLink to="/Settings" activeClassName={c.active}>
                <div>Settings</div>
            </NavLink>
        </nav>
    );

}

export default NavBar;