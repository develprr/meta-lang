import React, {Component} from 'react';
import {disconnectFromStores} from 'metamatic';
import {connectToUrl, updateUrl} from '../../utils/RouteUtil';

const classNames = require('classnames');

class NaviItem extends Component {

  componentDidMount = () => connectToUrl(this, (url) => this.setState({url}));

  componentWillUnmount = () => disconnectFromStores(this);

  isActive = () => (this.state || {}).url === this.props.path;

  getStateClass = () => this.isActive() && 'active';

  onClick = () => updateUrl(this.props.path);

  render = () => (
    <div className={classNames('navi-item', this.getStateClass())} onClick={this.onClick}>
      <i className={'material-icons'}>{this.props.icon}</i>
    </div>
  );
}

export class NaviBar extends Component {

  render = () => (
    <div className={'navi-bar'}>
      <NaviItem path={'/language'} icon={'language'}>Language</NaviItem>
      <NaviItem path={'/vocabulary'} icon={'library_books'}>Vocabulary</NaviItem>
      <NaviItem path={'/exercises'} icon={'question_answer'}>Exercises</NaviItem>
      <NaviItem path={'/profile'} icon={'face'}>Profile</NaviItem>
    </div>
  )

}

