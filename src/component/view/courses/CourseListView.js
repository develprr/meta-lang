import React, {Component} from 'react';
import {connectToState} from 'metamatic';
import {STORE_COURSE} from '../../../store/course/CourseStore';
import {MetaGrid} from '../../common/MetaGrid';

export class CourseListView extends Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount = () => connectToState(
      this,
      STORE_COURSE,
      'list', (courses) => this.setState({...this.state, courses})
  );

  getGridColumns = () => [
    {
      id: '_id',
      index: 0,
      visible: false
    },
    {
      id: 'name',
      index: 1,
      sortIndex: 0,
      sortDirection: 'asc',
      title: 'Course Name',
      visible: true
    },
    {
      id: 'description',
      index: 2,
      sortIndex: 0,
      sortDirection: 'asc',
      title: 'Course Description',
      visible: true
    }
  ];

  onColumnChange = () => {
  }

  getCourses = () => this.state.courses || [];

  render = () => (
      <div className={'course-list-view'}>
        <h1>Available Courses</h1>
        <MetaGrid columns={this.getGridColumns()}
                  onColumnChange={this.onColumnChange}
                  data={this.getCourses()}
                  pageIndex={0}
                  pageSize={100}/>
      </div>
  );
}
