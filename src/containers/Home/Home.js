import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import style from './Home.module.css';
import Signature from '../../components/UI/Signature/Signature';
import Data from '../../data';

class Home extends Component {
    render () {

        return (
            <div className={style.Home}>
                <div className={style.Sig}>
                    <span></span><Signature /><span></span>
                    <Data/>
                </div>
                <nav>
                <Link to="/resume">
                    <button 
                        type="button"
                        className={style.Btn}>
                        Resume
                    </button>
                </Link>
                <Link to="/about-me">
                    <button 
                        type="button"
                        className={style.Btn}>
                        About Me
                    </button>
                </Link>
                </nav>
            </div>
        )
    }
}

export default Home;