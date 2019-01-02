import React, {Component} from 'react';
import {Header} from 'component/layout/header/Header';
import {CourseListView} from 'component/view/courses/CourseListView';
import {VocabularyView} from 'component/view/vocabulary/VocabularyView';

import {ExerciseView} from 'component/view/exercise/ExerciseView';
import {ProfileView} from 'component/view/profile/ProfileView';

import {connectToRouter, matchRoute} from '@metamatic.net/metamatic-router';

export class App extends Component {

  componentDidMount = () => connectToRouter(this, () => this.forceUpdate());

  render = () => (
    <div className="meta-lang">
      {matchRoute('/', <Header/>)}
      {matchRoute('/courses', <CourseListView/>)}
      {matchRoute('/vocabulary', <VocabularyView/>)}
      {matchRoute('/exercises', <ExerciseView/>)}
      {matchRoute('/profile', <ProfileView/>)}
    </div>
  )
}
