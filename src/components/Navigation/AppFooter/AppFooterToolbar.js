import React from 'react';
import { Link } from 'react-router-dom';

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faPlusSquare, faUsers } from '@fortawesome/free-solid-svg-icons'

import AppFooterItem from './AppFooterItem';
import style from '../../CSS/AppFooter.module.css'

library.add(faHome, faPlusSquare, faUsers)

const appFooterToolbar = () => (
    <ul className={style.AppFooter}>
        <AppFooterItem><Link to='/clone-home-page'><FontAwesomeIcon icon='home' /></Link></AppFooterItem>
        <AppFooterItem><Link to='/add-post-page'><FontAwesomeIcon icon='plus-square' /></Link></AppFooterItem>
        <AppFooterItem><Link to='/profile-page'><FontAwesomeIcon icon='users' /></Link></AppFooterItem>
    </ul>
);

export default appFooterToolbar;