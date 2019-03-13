import React from 'react';
import { withRouter, Link } from 'react-router-dom';

import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCrown, faArrowLeft, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';


import style from '../../CSS/AppHeader.module.css';
import PageIcons from '../AppFooter/AppFooterToolbar';

library.add(faCrown, faArrowLeft, faSignOutAlt)

const appHeader = ( props ) => {

    let inputElement = null;

    switch ( props.history.location.pathname ) {
        case ( '/add-post-page' ):
            inputElement =
                <div className={style.AppHeader}>
                    <div className={style.Next}>
                        <Link className={style.Next} to={'/share-page'}>
                            Next
                        </Link>
                    </div>
                </div>
            break;
        case ( '/share-page'):
            inputElement =
                <div className={style.AppHeader}>
                    <div className={style.container}>
                        <Link to={'/add-post-page'}>
                            <FontAwesomeIcon icon='arrow-left' />
                        </Link>
                        <button>Post</button>
                    </div>
                </div>
            break;
        default:
            inputElement =  
                <div className={style.AppHeader}>
                    <div>
                        <Link to='/clone-home-page'><FontAwesomeIcon icon='crown'/></Link>
                        <Link className={style.Logout} to={'/logout'}><FontAwesomeIcon icon='sign-out-alt'/></Link>
                        <PageIcons/>
                    </div>
                </div>
    }

        return (
            <div>
                {inputElement}
                <PageIcons />
            </div>
        )

};

export default withRouter(appHeader);