import React, {Component} from 'react';
import {Header} from 'layout/header/Header';
import {LanguageView} from 'views/language/LanguageView';
import {VocabularyView} from 'views/vocabulary/VocabularyView';
import {connectToUrl, matchRoute} from 'utils/RouteUtil';
import {ExerciseView} from 'views/exercise/ExerciseView';
import {ProfileView} from 'views/profile/ProfileView';

export class App extends Component {

  componentDidMount = () => connectToUrl(this, () => this.setState({}));

  render = () => (
    <div className="meta-lang">
      {matchRoute('/', <Header/>)}
      {matchRoute('/language', <LanguageView/>)}
      {matchRoute('/vocabulary', <VocabularyView/>)}
      {matchRoute('/exercises', <ExerciseView/>)}
      {matchRoute('/profile', <ProfileView/>)}
    </div>
  )
}
