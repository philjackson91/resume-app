import React from 'react';
import style from './ToolbarNavItems.module.css';
import ToolbarNavItem from './ToolbarNavItem/ToolbarNavItem';
import { Link } from 'react-router-dom';

const toolbarNavItems = () => (
    <ul className={style.NavigationItems}>
        <ToolbarNavItem ><Link to="/auth">Login In</Link></ToolbarNavItem>
        <ToolbarNavItem ><Link to="/resume">Experience</Link></ToolbarNavItem>
        <ToolbarNavItem ><Link to="/resume">Skills</Link></ToolbarNavItem>
        <ToolbarNavItem ><Link to="/contact">Contact</Link></ToolbarNavItem>
    </ul>
);

export default toolbarNavItems;