import React, {Component} from 'react';
import {AppTitle} from 'layout/header/AppTitle';
import {NaviBar} from 'layout/header/NaviBar';

export class Header extends Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  render = () => (
      <div className={"navigation-div"}>
        <AppTitle/>
        <NaviBar/>
      </div>
  )

}
