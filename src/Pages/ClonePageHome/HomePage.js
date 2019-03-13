import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import * as firebase from 'firebase';

import PostCard from '../../components/UI/Posts/PostCard';
import classes from '../CSS/ClonePage.module.css';
import * as actionTypes from '../../store/actions/actiontypes'; 

class HomePage extends Component {
    state = {
        posts: []
    }

    componentDidMount () {
        const rootref = firebase.database().ref('users/' + this.props.userId);
        rootref.on('value', snap => {
            this.props.onFetchData({
                userData: snap.val()
            })
        })
    }

    render () {
        let posts = []
        let postConfig = []

        if (this.props.userData.userData === null ) {
            console.log(true)
        }else {
            console.log('[homePage]', postConfig)

            for ( let key in this.props.userData.userData.posts ) {
                postConfig.push({
                    id: key,
                    data: this.props.userData.userData.posts[key]
                });
            }

            postConfig.forEach(element => {
                posts.push(
                    <PostCard 
                        key={element.id}
                        userImage={this.props.userData.userData.profilePic}
                        userName={this.props.userData.userData.username}
                        postImage={element.data.photo}
                        likes={element.data.likes}

                    />
                )            
            })
        }

        return (
            <div className={classes.container}>
                {posts}
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        token: state.auth.token,
        userId: state.auth.userId,
        userData: state.data.userData
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onFetchData: (data) => dispatch( {type:  actionTypes.FETCH_DATA, data: data} ),
        onPostData: (data) => dispatch({type: actionTypes.POST_DATA, data: data})
    };
};

export default connect( mapStateToProps, mapDispatchToProps)( HomePage, axios );