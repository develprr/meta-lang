import React, {Component} from 'react';
import {Header} from 'layout/header/Header';
import {CourseListView} from 'views/courses/CourseListView';
import {VocabularyView} from 'views/vocabulary/VocabularyView';

import {ExerciseView} from 'views/exercise/ExerciseView';
import {ProfileView} from 'views/profile/ProfileView';

import {connectToRouter, matchRoute} from 'metamatic';

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
