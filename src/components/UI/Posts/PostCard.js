import React from 'react';

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'

import style from '../../CSS/SinglePost.module.css';

library.add(faHeart)

const singlePost = (props) => {    
    return (
    <div className={`${style.card} ${style.flipBox}`} >
                <div className={style.flipBoxInner}>
                    <div className={style.flipBoxFront}>
                        <div className={style.post} >
                            <img src={props.postImage}/>
                        </div>                
                        <div className={style.container}>
                            <div className={style.chip}>
                                <img src={props.userImage} alt=''/>
                                {props.userName}
                                <p>{props.caption}</p>
                            </div>
                            <div className={style.heart}>
                                <FontAwesomeIcon icon='heart' />
                                <p>{props.likes}</p>
                            </div>
                        </div>
                    </div>
                    {/* <div className={style.flipBoxBack}>
                        <h2>Comments</h2>
                    </div> */}
                </div>
            </div>
    )
};

export default singlePost