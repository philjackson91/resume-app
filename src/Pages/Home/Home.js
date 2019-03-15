import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import style from '../CSS/Home.module.css';
import Signature from '../../components/UI/Signature/Signature';


class Home extends Component {
    render () {
        return (
            <div className={style.Home}>
                <div className={style.Sig}>
                    <span></span><Signature /><span></span>
                </div>
                <nav>
                <Link to="/resume">
                    <button 
                        type="button"
                        className={style.Btn}>
                        Resume
                    </button>
                </Link>
                <Link to="/login-page">
                    <button 
                        type="button"
                        className={style.Btn}>
                        Social App!
                    </button>
                </Link>
                </nav>
            </div>
        )
    }
}

export default Home;