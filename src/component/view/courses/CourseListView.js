import React, {Component} from 'react';
import {connectToState} from 'metamatic';
import {STORE_COURSE} from '../../../store/course/CourseStore';

export class CourseListView extends Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount = () => connectToState(
      this,
      STORE_COURSE,
      'list', (list) => this.setState({...this.state, list})
  );

  render = () => (
      <div className={'course-list-view'}>
        <h1>Courses View</h1>
      </div>
  );
}
