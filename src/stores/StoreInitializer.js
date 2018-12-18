import {ExerciseStore} from './exercise/ExerciseStore';
import {LanguageStore} from './language/LanguageStore';
import {ProfileStore} from './profile/ProfileStore';
import {VocabularyStore} from './vocabulary/VocabularyStore';

export const initStores = () => {
  ExerciseStore();
  LanguageStore();
  ProfileStore();
  VocabularyStore();
}
