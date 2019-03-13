import React from 'react';

import Logo from '../../UI/Logo/Logo';
import ToolbarNavItems from '../Toolbar/ToolbarNavItems/ToolbarNavItems';
import style from './SideMenu.module.css';
import Backdrop from '../../UI/BackDrop/Backdrop';
import Aux from '../../../hoc/_Aux/_Aux';

const sideMenu = ( props ) => {

    let attachedClasses = [style.SideMenu, style.Close];
    if (props.open) {
        attachedClasses = [style.SideMenu, style.Open]
    }
    
    
    return (
        <Aux>
            <Backdrop 
                show={props.open}
                clicked={props.closed} />
            <div className={attachedClasses.join(' ')}>
                <div className={style.Logo}>
                    <Logo />
                </div>
                <nav>
                    <ToolbarNavItems />
                </nav>
            </div>
        </Aux>
    );
};


export default sideMenu;