/* eslint-disable no-loop-func */
import React, { Component } from 'react';
import axios from 'axios';
import Post from '../Post/Post';

class FullPost extends Component {
    state = {
        data: [],
        users: [],
        friends: [],
    }
    componentDidMount () {
        let postData=null;
        let updatedPostData = null;
        let finalusers = [];
        let x = null;


        axios.all([
            axios.get('http://jsonplaceholder.typicode.com/users'),
            axios.get('http://jsonplaceholder.typicode.com/photos')
        ])
        .then(axios.spread((users, photos) => {
            postData =[users.data, photos.data.splice(0, 10)];
            updatedPostData = postData.flat();
            for(var i = 1; i < 11; i++) {
                x = updatedPostData.filter((id1) => {
                    return id1.id === i ;
                });
                finalusers.push(x)
            }
            const [user1, user2] = finalusers;
            // console.log([first]);
            this.setState({data: finalusers});
            console.log(this.state.data);  
        }));
    }
    
    

    render () {
        return (
            <div>
                {/* <Post
                    username={this.state.usernames.data}
                    title={this.state.titles}/> */}
            </div>
        )
    }
};

export default FullPost;