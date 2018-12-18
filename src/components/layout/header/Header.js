import React, {Component} from 'react';
import {AppTitle} from './AppTitle';
import Navigation from './Navigation';

export class Header extends Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  renderNavigation = () => <Navigation/>

  render = () => (
      <div className={"navigation-div"}>
        <AppTitle/>
        {this.renderNavigation()}
      </div>
  )

}
