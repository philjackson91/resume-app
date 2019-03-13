import React, { Component } from 'react';
import style from './Posts.module.css';
import backupPhoto from '../../../assets/images/images.jpg'
import maleAvatar from '../../../assets/images/maleAvatar.png'
import '@fortawesome/free-solid-svg-icons';
import '@fortawesome/free-brands-svg-icons';

class Post extends Component {
    render () {
        return (
            <div className={`${style.card} ${style.flipBox}`} >
                <div className={style.flipBoxInner}>
                    <div className={style.flipBoxFront}>
                        <div className={style.post} >
                            <img src={backupPhoto} alt="Avatar" />
                        </div>                
                        <div className={style.container}>
                            <div className={style.chip}>
                                <img src={maleAvatar} alt="Person" />
                                <p>John Doe</p>
                            </div>
                            <div>
                                <i className="far fa-thumbs-up"></i>
                            </div>
                        </div>
                    </div>
                    <div className={style.flipBoxBack}>
                        <h2>Comments</h2>
                    </div>
                </div>
            </div>
        );
    }
};
export default Post;