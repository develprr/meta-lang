import React, {Component} from 'react';
import {connectToRouter, disconnectFromRouter, redirectTo} from '@metamatic.net/metamatic-router';

const classNames = require('classnames');

class NaviItem extends Component {

  componentDidMount = () => connectToRouter(this, (url) => this.setState({url}));

  componentWillUnmount = () => disconnectFromRouter(this);

  isActive = () => (this.state || {}).url === this.props.path;

  getStateClass = () => this.isActive() && 'active';

  onClick = () => redirectTo(this.props.path);

  render = () => (
    <div className={classNames('navi-item', this.getStateClass())} onClick={this.onClick}>
      <i className={'material-icons'}>{this.props.icon}</i>
    </div>
  );
}

export class NaviBar extends Component {

  render = () => (
    <div className={'navi-bar'}>
      <NaviItem path={'/courses'} icon={'local_library'}>Courses</NaviItem>
      <NaviItem path={'/vocabulary'} icon={'library_books'}>Vocabulary</NaviItem>
      <NaviItem path={'/exercises'} icon={'question_answer'}>Exercises</NaviItem>
      <NaviItem path={'/profile'} icon={'face'}>Profile</NaviItem>
    </div>
  )

}

