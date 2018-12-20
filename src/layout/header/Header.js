import React, {Component} from 'react';
import {AppTitle} from 'layout/header/AppTitle';
import Navigation from 'layout/header/NaviBar';
import {AbstractSegment} from 'common/AbstractSegment';

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
        <AbstractSegment/>
      </div>
  )

}
