import React from 'react';
import { withRouter } from 'react-router-dom';

import style from './Toolbar.module.css';
import Logo from '../../UI/Logo/Logo';
import ToolbarNavItems from './ToolbarNavItems/ToolbarNavItems';
import MenuToggle from '../SideMenu/MenuToggle/MenuToggle';


const toolbar = (props) => {
        return (
            <header className={style.Toolbar}>
                            <MenuToggle clicked={props.MenuToggleClicked}/>
                            <Logo height='80%'></Logo>
                        <nav className={style.DesktopOnly}>
                            <ToolbarNavItems />
                        </nav>
                        </header>
        )
    }

export default withRouter(toolbar);