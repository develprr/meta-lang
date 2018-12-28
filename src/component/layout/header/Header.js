import React, {Component} from 'react';
import {AppTitle} from 'component/layout/header/AppTitle';
import {NaviBar} from 'component/layout/header/NaviBar';

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
