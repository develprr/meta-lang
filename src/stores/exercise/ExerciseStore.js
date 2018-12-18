import {initStore} from 'metamatic'

export const STORE_EXERCISE = 'STORE_EXERCISE';

export const ExerciseStore = () => initStore(STORE_EXERCISE, getInitialStore());

const getInitialStore = () => ({
  exercises: []
});
