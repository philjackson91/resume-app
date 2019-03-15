import React, { Component } from 'react';

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'

import style from '../../CSS/SinglePost.module.css';

library.add(faHeart)

class SinglePost extends Component {
    state = {
        active: true,
        flipboxClasses: [style.card, style.flipBox]
    }

    toggleClass = () => {
        let currentState = this.state.active;
        if (currentState) {
            this.setState({
                active: !currentState,
                flipboxClasses: [style.card, style.flipBox, style.flipped]
            })
        }else {
            this.setState({
                active: !currentState,
                flipboxClasses: [style.card, style.flipBox]
            })
        }
    }    

    render () {
        console.log(this.state.active)
        console.log('[flipboxClasses]', this.state.flipboxClasses)
    
        return (
        <div onClick={this.toggleClass} className={this.state.active ? this.state.flipboxClasses.join(' ') : this.state.flipboxClasses.join(' ')} >
                    <div className={style.flipBoxInner}>
                        <div className={style.flipBoxFront}>
                            <div className={style.post} >
                                <img src={this.props.postImage}/>
                            </div>                
                            <div className={style.container}>
                                <div className={style.chip}>
                                    <img src={this.props.userImage} alt=''/>
                                    {this.props.userName}
                                    <p>{this.props.caption}</p>
                                </div>
                                <div className={style.heart}>
                                    <FontAwesomeIcon icon='heart' />
                                    <p>{this.props.likes}</p>
                                </div>
                            </div>
                        </div>
                        <div className={style.flipBoxBack}>
                            <h2>Comments</h2>
                        </div>
                    </div>
                </div>
        )
    }    
};

export default SinglePost