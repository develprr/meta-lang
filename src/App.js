import React, {Component} from 'react';
import {Header} from 'layout/header/Header';
import {LanguageView} from 'views/language/LanguageView';
import {VocabularyView} from 'views/vocabulary/VocabularyView';
import {STORE_ROUTE} from 'stores/application/RouteStore';
import {connectToStore} from 'metamatic';

export class App extends Component {

  componentDidMount = () => connectToStore(this, STORE_ROUTE, () => this.setState({...this.state}));

  constructor(props) {
    super(props);
    this.state = {};
  }

  renderRoute = (pattern, component) => window.location.pathname.match(pattern) && component;

  render = () => (
    <div className="meta-lang">
      {this.renderRoute('/', <Header/>)}
      {this.renderRoute('/language', <LanguageView/>)}
      {this.renderRoute('/vocabulary', <VocabularyView/>)}
    </div>
  )
}
