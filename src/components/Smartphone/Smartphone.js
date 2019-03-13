import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom';

import style from '../CSS/SmartPhone.module.css';
import AppFooterToolbar from '../Components/Navigation/AppFooter/AppFooterToolbar';
import HomePage from '../HomePage/HomePage';

import ProfilePage from '../ProfilePage/ProfilePage';
import AppHeader from '../Components/Navigation/AppHeader/AppHeader';
import SharePage from '../AddPostPage/SharePage'
import PicSelectorPage from '../AddPostPage/PicSelectorPage';


const smartPhone = ( props ) => (
    <div className={style.smartphone}>
        <div className={style.app}>
            <div className={style.content}>
                <BrowserRouter>
                    <div>
                        <AppHeader />

                        <Route path='/home-page' exact component={HomePage}/>

                        <Route path='/pic-selector-page' exact component={PicSelectorPage}/>
                        <Route path='/share-page' exact component={SharePage}/>

                        <Route path='/profile-page' exact component={ProfilePage}/>
                        <Route path='/friends-page' exact component={ProfilePage}/>
                        <Route path='/selected-post-page' exact component={ProfilePage}/>

                        <AppFooterToolbar />
                    </div>                    
                </BrowserRouter>            
            </div> 
        </div>
    </div>
);


export default smartPhone;