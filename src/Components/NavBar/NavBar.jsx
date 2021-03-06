import React from 'react';
import c from './NavBar.module.css';
import {NavLink} from "react-router-dom";
import SiteBar from "./SiteBar/SiteBar";

const NavBar = (props) => {

    return (
        <nav className={c.nav}>
            <div className={c.nav_div}>
                <NavLink to={"/Profile/"+ props.id}  activeClassName={c.active}>
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
                <NavLink to="/Users" activeClassName={c.active}>
                    <div>Users</div>
                </NavLink>
                <NavLink to="/Settings" activeClassName={c.active}>
                    <div>Settings</div>
                </NavLink>

            </div>

            <SiteBar/>
        </nav>


    );

}

export default NavBar;