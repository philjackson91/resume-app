import React from 'react';

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquare as farSquare, faWindowMinimize } from '@fortawesome/free-solid-svg-icons'

import classes from './icon.module.css';

library.add(farSquare, faWindowMinimize)

const profileIcons = (props) => (
    <div onClick={props.clicked} className={classes.icon}>
        <span><div className={classes.line}></div></span>
        <span><FontAwesomeIcon className={classes.square} icon='square'></FontAwesomeIcon></span>
        <span><div className={classes.line}></div></span>
    </div>
);

export default profileIcons;