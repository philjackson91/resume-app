import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as firebase from 'firebase';

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusCircle, faTh} from '@fortawesome/free-solid-svg-icons'

import '../CSS/ProfilePage.module.css';
import classes from '../CSS/ProfilePage.module.css';
import Aux from '../../hoc/_Aux/_Aux';
import Icon from './icon';
import PostCard from '../../components/UI/Posts/PostCard';

library.add(faPlusCircle, faTh)

class ProfilePage extends Component {
    state = {
        selectedView: 'gridview'
    }

    componentDidMount () {
        let storage = firebase.storage();
        let photoRef = storage.refFromURL('gs://resume-app-e1e41.appspot.com/johns profile photos')
    }


    render () {
        console.log('[profilePage]',this.props.userData.userData.posts)
        console.log(this.state.selectedView);
        let postviewer = [];
        let postConfig = [];
        let classname = this.state.selectedView;

        switch (this.state.selectedView){
            case 'gridview':
                for ( let key in this.props.userData.userData.posts ) {
                    postConfig.push({
                        id: key,
                        data: this.props.userData.userData.posts[key]
                    });
                }

                postConfig.forEach(element => {
                postviewer.push(
                    <img 
                        key={element.id}
                        src={element.data.photo} 
                        alt=''/>
                )                    
            });
            break;
            case 'postview':
                for ( let key in this.props.userData.userData.posts ) {
                    postConfig.push({
                        id: key,
                        data: this.props.userData.userData.posts[key]
                    });
                }

                postConfig.forEach(element => {
                    postviewer.push(
                        <PostCard 
                            key={element.id}
                            userImage={this.props.userData.userData.profilePic}
                            userName={this.props.userData.userData.username}
                            postImage={element.data.photo}
                            likes={element.data.likes}

                        />
                    )            
                })
            break;
            default:
                this.props.userData.userData.posts.forEach(element => {
                    postviewer.push(
                        <img 
                            src={element.photo} 
                            alt=''/>
                    )                    
                });
        }

        return (
            <Aux>
                <div className={classes.headerContainer}>
                    <h1 className={classes.userName}>{this.props.userData.userData.username}</h1>
                    <div className={classes.profilePic}>
                        <img src={this.props.userData.userData.profilePic}/>
                        <FontAwesomeIcon className={classes.editIcon} icon='plus-circle'></FontAwesomeIcon>
                    </div>
                    <button className={classes.editButton}>Edit Profile</button>
                </div>
                <div className={classes.icons}>
                    <FontAwesomeIcon onClick={()=>{this.setState({selectedView: 'gridview'})}} icon='th'></FontAwesomeIcon>
                    <Icon clicked={()=>{this.setState({selectedView: 'postview'})}}></Icon>
                </div>
                <div className={classname}>
                    {postviewer}
                </div>
            </Aux>
        )
    }

}

const mapStateToProps = state => {
    return {
        userData: state.data.userData
    };
};

export default connect(mapStateToProps)(ProfilePage);