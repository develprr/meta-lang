import React, {Component} from 'react';
import {disconnectFromStores} from 'metamatic';
import {connectToRoute, navigateTo} from '../../stores/application/RouteStore';

const classNames = require('classnames');

class NaviItem extends Component {

  componentDidMount = () => connectToRoute(this, (route) => this.setState({route}));

  componentWillUnmount = () => disconnectFromStores(this);

  isActive = () => (this.state || {}).route === this.props.name;

  getStateClass = () => this.isActive() && 'active';

  onClick = () => navigateTo(this.props.name);

  render = () => (
    <div className={classNames('navi-item', this.getStateClass())} onClick={this.onClick}>
      <i className={'material-icons'}>{this.props.icon}</i>
    </div>
  );
}

export class NaviBar extends Component {

  render = () => (
    <div className={'navi-bar'}>
      <NaviItem name={'language'} icon={'language'}>Language</NaviItem>
      <NaviItem name={'vocabulary'} icon={'library_books'}>Vocabulary</NaviItem>
      <NaviItem name={'exercises'} icon={'question_answer'}>Exercises</NaviItem>
      <NaviItem name={'profile'} icon={'face'}>Profile</NaviItem>
    </div>
  )

}

