import {ExerciseStore} from 'stores/exercise/ExerciseStore';
import {LanguageStore} from 'stores/courses/CourseListStore';
import {ProfileStore} from 'stores/profile/ProfileStore';
import {VocabularyStore} from 'stores/vocabulary/VocabularyStore';
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
