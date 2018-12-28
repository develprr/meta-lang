
const API_BASE_URL = 'https://metamatic-demo-server.herokuapp.com/api/meta-lang';

const getUrl = (relativeUrl) => `${API_BASE_URL}/${relativeUrl}`;

export const getUrlForCoursesList = () => getUrl('course');
