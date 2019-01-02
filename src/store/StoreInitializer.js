import {ExerciseStore} from 'store/exercise/ExerciseStore';
import {CourseStore} from 'store/course/CourseStore';
import {ProfileStore} from 'store/profile/ProfileStore';
import {VocabularyStore} from 'store/vocabulary/VocabularyStore';
import {ApplicationStore} from './application/ApplicationStore';

export const initStores = () => {
  ApplicationStore();
  ExerciseStore();
  CourseStore();
  ProfileStore();
  VocabularyStore();
}
