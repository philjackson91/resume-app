import React from 'react'
import Posts from '../Posts/Posts';
import style from './SmartPhone.module.css';

const smartPhone = (props) => (
    <div className={style.smartphone}>
        <div className={style.app}>
        <header className={style.Header}>
            <h1>header</h1>
        </header>
            <div className={style.content}>
                <Posts />
                <Posts />
                <Posts />
                <Posts />
            </div>
            <footer className={style.Footer}>
                <h1>footer</h1>
            </footer>
        </div>
    </div>
);
export default smartPhone;