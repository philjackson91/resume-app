import React from 'react';
import { withRouter, Link } from 'react-router-dom';

import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDog, faArrowLeft, faSignOutAlt, faSearch } from '@fortawesome/free-solid-svg-icons';

import SearchPage from '../../../Pages/SearchPage/SearchPage';

import style from '../../CSS/AppHeader.module.css';

library.add(faDog, faArrowLeft, faSignOutAlt, faSearch)

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
        case ( '/share-page' ):
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
            case ( '/search-page'):
            inputElement = 
                <div className={style.AppHeader}>
                    <div>
                        <FontAwesomeIcon className={style.search} icon='search'/>
                        <SearchPage />
                    </div>
                </div>
            break;
        default:
            inputElement =  
                <div className={style.AppHeader}>
                    <div>
                        <Link className={style.dog} to='/clone-home-page'><FontAwesomeIcon icon='dog'/></Link>
                        <p className={style.puppygram}>Puppygram</p>
                        <Link className={style.Logout} to={'/logout'}><FontAwesomeIcon icon='sign-out-alt'/></Link>
                    </div>
                </div>
    }

        return (
            <div>
                {inputElement}
            </div>
        )

};

export default withRouter(appHeader);