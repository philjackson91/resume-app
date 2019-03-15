import React, { Component } from 'react';
import * as firebase from 'firebase';

import classes from '../CSS/SearchPage.module.css';

class SearchPage extends Component {
    state = {
        searchList: [],
        searchText: '',
        searchResults: []
    }

    componentDidMount () {
        const searchref = firebase.database().ref('users/');
        searchref.on('value', snap => {
            snap.forEach(data => {
                this.setState({
                    searchList:  data.val().username
                })
            })
        })
    }

    render () {
        console.log('[Searchref]', this.state.searchList)
        return (
            <div className={classes.container}>
                <div>
                    <input
                    className={classes.searchBar}
                    type='text'
                    placeholder='Search...'
                    onChange={(event) => this.setState({searchText: event.target.value})}/>
                </div>
            </div>
        )
    }

}
export default SearchPage;