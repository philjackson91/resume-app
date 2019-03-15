import React from 'react';
import { Link } from 'react-router-dom';

import style from './Logo.module.css';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCrown } from '@fortawesome/free-solid-svg-icons'

library.add(faCrown)

const logo = () => (
    <div className={style.Logo}>
        <Link to='/'>
            <FontAwesomeIcon className={style.crown} icon='crown'/>
        </Link>
        
    </div>
);

export default logo;