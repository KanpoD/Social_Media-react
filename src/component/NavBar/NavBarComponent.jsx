import React from 'react';
import {NavLink} from "react-router-dom";

const checkIsActive = ({isActive}) => {
    return isActive ? {
        color: 'orange'
    } : {}
}
const NavBar = () => {
    return (
        <nav style={{display: "flex", gap: '15px'}}>
            <NavLink style={checkIsActive} to={'/'}>Accueil</NavLink>
            <NavLink style={checkIsActive} to={'/comments-page'}>Page des posts</NavLink>
        </nav>
    );
};

export default NavBar;