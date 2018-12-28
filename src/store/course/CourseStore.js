import axios from 'axios';
import {getState, handleEvent, initStore, setState} from 'metamatic';
import {getUrlForCoursesList} from '../../util/UrlUtil';

export const STORE_COURSE = 'STORE_COURSE';
export const CONNECT_COURSE = `CONNECT/${STORE_COURSE}`;

export const CourseStore = () => {
  initStore(STORE_COURSE, getInitialStore());
  handleEvent(CONNECT_COURSE, optionallyLoadCourseList)
}

const getInitialStore = () => ({
  list: []
});

const getCoursesList = () => getState(STORE_COURSE, 'list');

const containsCourses = () => getCoursesList().length > 0;

const optionallyLoadCourseList = () => containsCourses() || loadCoursesList();

const loadCoursesList = () => axios.get(getUrlForCoursesList()).then(
    response => setState(STORE_COURSE, 'list', response.data)
);

