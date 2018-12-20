import React, {Component} from 'react';
import withRouter from 'react-router-dom/withRouter';
const classNames = require('classnames');

class NaviLink extends Component {

  render = () => (
    <li className={'navi'} onClick={this.onClick}>-
      <div className={classNames("circle", this.getCssClassActive())}>
        <i className={'material-icons'}>{this.props.icon}</i>
      </div>
      <div className={"description"}>{this.props.description}</div>
    </li>
  )
}

class Navigation extends Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  render = () => (
      <ul className={'navigation'}>
        <NaviListItem>Language</NaviListItem>
        <NaviListItem>Vocabulary</NaviListItem>
        <NaviListItem>Exercises</NaviListItem>
        <NaviListItem>Profile</NaviListItem>
      </ul>
  )

}

export default withRouter(Navigation);
