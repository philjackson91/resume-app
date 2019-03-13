import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import style from './Toolbar.module.css';
import Logo from '../../UI/Logo/Logo';
import ToolbarNavItems from './ToolbarNavItems/ToolbarNavItems';
import MenuToggle from '../SideMenu/MenuToggle/MenuToggle';
import Signature from '../../UI/Signature/Signature';


class Toolbar extends Component {
    render () {
        let sig = null;
        if (this.props.location.pathname === '/'){
            return (
                <header className={style.Toolbar}>
                    <MenuToggle clicked={this.props.MenuToggleClicked}/>
                    <Logo height='80%'></Logo>
                <nav className={style.DesktopOnly}>
                    <ToolbarNavItems />
                </nav>
                </header>
            )
        }else (
            sig = <Signature className={style.sigMoved}/>
        );
        return (
            <header className={style.Toolbar}>
                <MenuToggle clicked={this.props.MenuToggleClicked}/>
                <Logo height='80%'></Logo>
                {sig}
            <nav className={style.DesktopOnly}>
                <ToolbarNavItems />
            </nav>
            </header>
        )
    }
    
};

export default withRouter(Toolbar);