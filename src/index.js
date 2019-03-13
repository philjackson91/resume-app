import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import * as serviceWorker from './serviceWorker';
import thunk from 'redux-thunk'
import * as firebase from 'firebase';

import './index.css';
import App from './App';
import newPostImageReducer from './store/reducers/newPostImageReducer';
import authReducer from './store/reducers/authReducer';
import dataReducer from './store/reducers/userDataReducer';


// Initialize Firebase
var config = {
    apiKey: "AIzaSyBNiV6IQFEU1P1ioM6Cgg6xFrjxc-p3jog",
    authDomain: "resume-app-e1e41.firebaseapp.com",
    databaseURL: "https://resume-app-e1e41.firebaseio.com",
    projectId: "resume-app-e1e41",
    storageBucket: "resume-app-e1e41.appspot.com",
    messagingSenderId: "547549805084"
    };
    firebase.initializeApp(config);

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
    auth: authReducer,
    newPostImage: newPostImageReducer,
    data: dataReducer
});

const store = createStore(rootReducer, composeEnhancers(
    applyMiddleware(thunk)
));


const app = (
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>
);

ReactDOM.render( app, document.getElementById('root') );
serviceWorker.unregister();
