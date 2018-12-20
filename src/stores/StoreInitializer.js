import {ExerciseStore} from 'stores/exercise/ExerciseStore';
import {LanguageStore} from 'stores/language/LanguageStore';
import {ProfileStore} from 'stores/profile/ProfileStore';
import {VocabularyStore} from 'stores/vocabulary/VocabularyStore';
import {ApplicationStore} from './application/ApplicationStore';

export const initStores = () => {
  ApplicationStore();
  ExerciseStore();
  LanguageStore();
  ProfileStore();
  VocabularyStore();
}
