import React from 'react';
import style from './ToolbarNavItem.module.css'

const toolbarNavItem = (props) => (
    <li className={style.NavigationItem}>
        <div
            className={props.active ? style.active : null}>{props.children}
        </div>
    </li>
);
export default toolbarNavItem;