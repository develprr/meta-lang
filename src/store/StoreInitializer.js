import {ExerciseStore} from 'store/exercise/ExerciseStore';
import {LanguageStore} from 'store/course/CourseListStore';
import {ProfileStore} from 'store/profile/ProfileStore';
import {VocabularyStore} from 'store/vocabulary/VocabularyStore';
import {ApplicationStore} from './application/ApplicationStore';
import {broadcastCurrentUrl} from 'metamatic';

export const initStores = () => {
  ApplicationStore();
  ExerciseStore();
  LanguageStore();
  ProfileStore();
  VocabularyStore();
  broadcastCurrentUrl();
}
