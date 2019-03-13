import React from 'react';
import Logo from '../../../assets/images/Chromatic-Tiles-Lion-King-No-Background.png';
import style from './Logo.module.css';
import { Link } from 'react-router-dom';

const logo = (props) => (
    <div className={style.Logo}>
        <Link to='/'>
            <img src={Logo} alt='Logo'></img>
        </Link>
        
    </div>
);

export default logo;