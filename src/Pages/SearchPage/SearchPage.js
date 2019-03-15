import React, { Component } from 'react';

import classes from '../CSS/SearchPage.module.css';

class SearchPage extends Component {
    state = {
        searchText: '',
        searchResults: []
    }

    render () {
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