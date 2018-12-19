import React from 'react';
import {Route} from 'react-router-dom';
import {Header} from 'layout/header/Header';
import BrowserRouter from 'react-router-dom/es/BrowserRouter';
import {LanguageView} from 'views/language/LanguageView';

export class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  renderContent = () => (
    <div className="meta-lang">
      <Route path='/' component={Header}/>
      <Route path='/language' component={LanguageView}/>
    </div>
  )

  render = () => (
    <BrowserRouter>
      {this.renderContent()}
    </BrowserRouter>
  )
}
