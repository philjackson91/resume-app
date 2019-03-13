import React, { useEffect } from 'react';
import Home from './containers/Home/Home';
import { Route, Switch, withRouter, Redirect } from 'react-router-dom';
import Layout from './hoc/Layout/Layout';
import AboutMe from './containers/AboutMe/AboutMe';
import Resume from './containers/Resume/Resume';
import Contact from './containers/Contact/Contact';
import Auth from './containers/Auth/Auth';


const app = props => {
  

    return (
      <div>
          <Layout>
            <Route path='/' exact component={Home}/>
            <Route path='/resume' component={Resume}/>
            <Route path='/auth' component={Auth}/>
            <Route path='/about-me' component={AboutMe}/>
            <Route path='/contact' component={Contact}/>
          </Layout>
      </div>
    );
}

export default app;
