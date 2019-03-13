import React from 'react';
import style from './MenuToggle.module.css';

const menuToggle = ( props ) => (
    <div className={style.MenuToggle} onClick={props.clicked}>
        <div></div>
        <div></div>
        <div></div>
    </div>
);

export default menuToggle;