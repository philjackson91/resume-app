import React from 'react';
import style from './ToolbarNavItems.module.css';
import ToolbarNavItem from './ToolbarNavItem/ToolbarNavItem';
import { Link } from 'react-router-dom';

const toolbarNavItems = () => (
    <ul className={style.NavigationItems}>
        <ToolbarNavItem ><Link to="/resume">Resume</Link></ToolbarNavItem>
        <ToolbarNavItem ><Link to="/login-page">Social App</Link></ToolbarNavItem>
        
    </ul>
);

export default toolbarNavItems;