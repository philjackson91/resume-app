import React, { useState } from 'react';
import { connect } from 'react-redux';

import PostCard from '../../components/UI/Posts/PostCard';
import classes from '../CSS/SharePage.module.css';

const SharePage = ( props ) => {
    const [postCaption, setPostCaption] = useState('');

    const inputChangedHandler = (event) => {
        setPostCaption(event.target.value)
    }   

        return (
            <div className={classes.pageContainer}>
                <PostCard 
                    userImage={props.userData.userData.profilePic}
                    userName={props.userData.userData.username}
                    postImage={props.selectedImage}
                    caption={postCaption}                 
                />
                <input className={classes.input}
                    type='text'
                    placeholder='Add a caption...'
                    onChange={inputChangedHandler}
                    value={postCaption}
                />
            </div>
        )          
};

const mapStateToProps = state => {
    return {
        userData: state.data.userData,
        selectedImage: state.newPostImage.src
    };
};

export default connect(mapStateToProps)(SharePage);