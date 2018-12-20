import React, {Component} from 'react';
import withRouter from 'react-router-dom/withRouter';
import {connectToState, disconnectFromStores} from 'metamatic';
import {STORE_APPLICATION} from '../../stores/application/ApplicationStore';

const classNames = require('classnames');

class NaviItem extends Component {

  componentDidMount = () => connectToState(this, STORE_APPLICATION, 'activeView', (activeView) => this.setState({activeView}));

  componentWillUnmount = () => disconnectFromStores(this);

  isActive = () => (this.state || {}).activeView === this.props.name;

  getStateClass = () => this.isActive() && 'active';

  render = () => (
    <div className={classNames('navi-item', this.getStateClass())} onClick={this.onClick}>
      <i className={'material-icons'}>{this.props.icon}</i>
    </div>
  );
}

class NaviBar extends Component {

  render = () => (
    <div className={'navi-bar'}>
      <NaviItem name={'language'} icon={'language'}>Language</NaviItem>
      <NaviItem name={'vocabulary'} icon={'library_books'}>Vocabulary</NaviItem>
      <NaviItem name={'exercises'} icon={'question_answer'}>Exercises</NaviItem>
      <NaviItem name={'profile'} icon={'face'}>Profile</NaviItem>
    </div>
  )

}

export default withRouter(NaviBar);
