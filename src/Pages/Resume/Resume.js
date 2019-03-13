import React from 'react';

import classes from '../CSS/Resume.module.css';
import resume_pdf from '../../assets/Phillip_D_Jackson.pdf'

const resume = () => (
    <div className={classes.background}>
        <a href={resume_pdf} download >
            <button>Download</button>
        </a>
        <div className={classes.resume}>
            <div className={classes.header}>
                <h1>Phillip Jackson</h1>
                <hr/>
                <p>
                    443-825-0367 | 
                    <a href={'mailto:philjackson91.pj@gmail.com'}> philjackson91@gmail.com</a> |
                    GitHub: <a href={'https://github.com/philjackson91/resume-app'}>philjackson91</a> | 
                    LinkedIn: <a href={'https://www.linkedin.com/in/phillip-d-jackson/'}> phillip-d-jackson</a>

                </p>
            </div>
            <div className={classes.technical_Skills}>
                <h3>Technical Skills</h3>
                <ul>
                    <li><strong>Programming :</strong> React,  Redux,  Next,  JavaScript,  HTML,  CSS</li>
                    <li><strong>Security :</strong> Firewalls, IDS/IPS, Network security, vulnerability-scanning, OS hardening,
                        browser security, Network analysis </li>
                    <li><strong>Systems :</strong> Linux/Windows, virtualized environments </li>
                </ul>
            </div>
            <div className={classes.Education}>
                <h3>Education</h3>
                <p><strong>A.A.S, CYBER SECURITY</strong>   COMMUNITY COLLEGE OF BALTIMORE COUNTY | FALL 2016-PRESENT BALTIMORE, MD </p>
                <ul>
                    <li><strong>DEGREE GPA: 4.0 </strong></li>
                    <li><strong>RELEVANT COURSEWORK: </strong> Intro to Linux, Ethical Hacking and Systems Defense Intro to
                        Firewalls, Cisco Networking 1-4, Intro to IDS/IPS, Advanced TPC/IP, Operating Systems
                        Security, Intro to Python</li>
                    <li><strong>HONORS: </strong>  Deans List, Phi Theta Kappa, Magna Cum Laude </li>
                    <li><strong>CERTIFICATE: </strong>Intro to Python </li>
                </ul>
            </div>
            <div className={classes.Certifications}>
                <h3>Certifications</h3>
                <ul>
                    <li><strong>CompTIA Security + 501</strong></li>
                </ul>
            </div>
            <div className={classes.Experience}>
                <h3>Experience</h3>
                <ul>
                    <li>
                        <strong>2014-2016 Mill at Meadowlands/Machine Operator/Manager/Farm Hand</strong>
                        <p>Took raw fleeces and process into yarn. Ran, cleaned and maintained scour, axi flow, picker,
                            carter, pin drafter, spinners, pliers, skein winder. Fed animals, assisted with medication, cleaned
                            stalls. Operated skid loader. Assisted with other duties around the farm as needed.</p>
                    </li>
                    <li>
                        <strong>2013-2014 Horton Mechanical Contractors/Plumbers Assistant </strong>
                        <p>Operated equipment for cutting large diameter pipe length, installed shields. Hung pipe hangers
                            and laid pipe.</p>
                    </li>
                </ul>
            </div>
        </div>
    </div>
)

export default resume;