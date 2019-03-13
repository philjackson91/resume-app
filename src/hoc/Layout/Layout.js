import React, { Component } from 'react';
import Aux from '../_Aux/_Aux';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import SideMenu from '../../components/Navigation/SideMenu/SideMenu';

class Layout extends Component {
    state = {
        showSideMenu: false
    }

    sideMenuClosedHandler = () => {
        this.setState( { showSideMenu: false } );
    }

    sideMenuToggleHandler = () => {
        this.setState( ( prevState ) => {
            return { showSideMenu: !prevState.showSideMenu };
        } );
    }
    
   render () {
        return (
            <Aux>
                <Toolbar MenuToggleClicked={this.sideMenuToggleHandler}/>
                <SideMenu
                    open={this.state.showSideMenu}
                    closed={this.sideMenuClosedHandler} />
                <main>
                    {this.props.children}
                </main>
            </Aux>
        )
   }
}

export default Layout;