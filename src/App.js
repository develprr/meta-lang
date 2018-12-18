import React from 'react';
import './App.css';
import {Route} from 'react-router-dom';
import {Header} from './components/layout/header/Header';
import BrowserRouter from 'react-router-dom/es/BrowserRouter';

export class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  renderContent = () => (
    <div className="meta-lang">
      <Route path='/' component={Header}/>
    </div>
  )

  render = () => (
    <BrowserRouter>
      {this.renderContent()}
    </BrowserRouter>
  )
}
