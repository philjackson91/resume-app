import React, { Component } from 'react';
import style from './AboutMe.module.css';
import SmartPhone from '../AboutMe/SmartPhone/SmartPhone';
import FullPost from '../AboutMe/Posts/FullPost/FullPost';
import Aux from '../../hoc/_Aux/_Aux';
import LoginForm from './Login/LoginForm';

class AboutMe extends Component {
    render () {
        return (
            <Aux>
            <FullPost />
            <div className={style.pageContainer}>
             <LoginForm />   
            {/* <SmartPhone />
            <SmartPhone /> */}

            </div>
            </Aux>
        )
    }
}

export default AboutMe;