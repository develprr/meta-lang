import {ExerciseStore} from 'stores/exercise/ExerciseStore';
import {LanguageStore} from 'stores/language/LanguageStore';
import {ProfileStore} from 'stores/profile/ProfileStore';
import {VocabularyStore} from 'stores/vocabulary/VocabularyStore';
import {ApplicationStore} from './application/ApplicationStore';
import {RouteStore} from './application/RouteStore';

export const initStores = () => {
  ApplicationStore();
  RouteStore();
  ExerciseStore();
  LanguageStore();
  ProfileStore();
  VocabularyStore();
}
