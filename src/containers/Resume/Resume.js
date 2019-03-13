import React, { Component } from 'react';
import style from './Resume.module.css';
import SkillImg from '../../assets/images/skills_image.jpg';
import EducImg from '../../assets/images/educationindex.jpg';
import CertImg from '../../assets/images/certificate.jpg';
import ExperImg from '../../assets/images/experience.jpg';
import './Resume.module.css'

class Resume extends Component {
    render () {
        return (
            <div className={style.ResumeGrid}>
                <div className={style.container}>
                    <img src={SkillImg} alt="Avatar" className={style.image} />
                    <div className={style.overlay}>
                        <div className={style.text}>SKILLS</div>
                    </div>
                </div>
                <div className={style.skillBar}>
                    <p>React</p>
                    <div className={style.container}>
                    <div className={`${style.skills} ${style.react}`}>80%</div>
                    </div>

                    <p>HTML</p>
                    <div className={style.Container}>
                    <div className={`${style.skills} ${style.html}`}>90%</div>
                    </div>

                    <p>CSS</p>
                    <div className={style.container}>
                    <div className={`${style.skills} ${style.css}`}>70%</div>
                    </div>

                    <p>JavaScript</p>
                    <div className={style.container}>
                    <div className={`${style.skills} ${style.js}`}>80%</div>
                    </div>


                    <p>Redux</p>
                    <div className={style.container}>
                    <div className={`${style.skills} ${style.redux}`}>60%</div>
                    </div>
                </div>

                
                <div className={`${style.b} ${style.box3}`}>3</div>

                <div className={style.container}>
                    <img src={EducImg} alt="Avatar" className={style.image} />
                    <div className={style.overlay}>
                        <div className={style.text}>EDUCATION</div>
                    </div>
                </div>
                <div className={style.container}>
                    <img src={CertImg} alt="Avatar" className={style.image} />
                    <div className={style.overlay}>
                        <div className={style.text}>CERTIFICATIONS</div>
                    </div>
                </div>
                <div className={`${style.b} ${style.box6}`}>6</div>
                <div className={`${style.b} ${style.box7}`}>7</div>
                <div className={style.container}>
                    <img src={ExperImg} alt="Avatar" className={style.image} />
                    <div className={style.overlay}>
                        <div className={style.text}>EXPERIENCE</div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Resume;