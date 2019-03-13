import React, { Component } from 'react';
import Home from './Pages/Home/Home';
import { Route, Switch, withRouter, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import Layout from './hoc/Layout/Layout';
import Resume from './Pages/Resume/Resume';
import Login from './Pages/Auth/LoginPage/LoginPage';
import Logout from './Pages/Auth/Logout/Logout';
import HomePage from './Pages/ClonePageHome/HomePage';
import * as actions from './store/actions/indexActions';
import PicSelectorPage from './Pages/AddPostPage/PicSelectorPage';
import ProfilePage from './Pages/ProfilePage/ProfilePage';
import AppHeader from './components/Navigation/AppHeader/AppHeader';
import AppFooter from './components/Navigation/AppFooter/AppFooterToolbar';
import SharePage from './Pages/SharePage/SharePage';


class App extends Component {
  componentDidMount () {
    this.props.onTryAutoSignup();
  }

  render () {
    let routes = (
      <Switch>
        <Route path='/' exact component={Home}/>
        <Route path='/login-page' component={Login}/>
        <Route path='/resume' component={Resume}/>
        <Redirect to='/login-page'/>
      </Switch>
    );

    if ( this.props.isAuthenticated ) {
      routes = (
        <Switch>
          <Route path='/' exact component={Home}/>
          <Route path='/logout' component={Logout}/>
          <Route path='/profile-page' component={ProfilePage}/>
          <Route path='/add-post-page' component={PicSelectorPage}/>
          <Route path='/resume' component={Resume}/>
          <Route path='/share-page' component={SharePage}/>
          <Route path='/clone-home-page' component={HomePage}/>
          <Redirect to='/clone-home-page' />
        </Switch>
      )
    }

    let layout = null;
    
    if ( this.props.location.pathname === '/' || this.props.location.pathname === '/resume') {
      layout = (
        <div>
          <Layout>
            {routes}
          </Layout>
        </div>
      );
    }else {
      layout = (
        <div>
          <Layout>
            <AppHeader/>
            {routes}
            <AppFooter/>
          </Layout>
        </div>
      );
    }

    return layout;
  }    
}

const mapStateToProps = state => {
  return {
    isAuthenticated: state.auth.token !== null
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onTryAutoSignup: () => dispatch( actions.authCheckState() )
  };
};

export default withRouter( connect( mapStateToProps, mapDispatchToProps )( App ) );
