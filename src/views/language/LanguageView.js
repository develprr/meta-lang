import React, {Component} from 'react';
import {Header} from 'layout/header/Header';
import {AbstractSegment} from 'common/AbstractSegment';

export class LanguageView extends Component {

  render = () => (
      <div className={'language-view'}>
        <h1>Language View</h1>
        <Header/>
        <AbstractSegment/>
      </div>
  );
}
