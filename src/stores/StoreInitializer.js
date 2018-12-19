import {ExerciseStore} from 'stores/exercise/ExerciseStore';
import {LanguageStore} from 'stores/language/LanguageStore';
import {ProfileStore} from 'stores/profile/ProfileStore';
import {VocabularyStore} from 'stores/vocabulary/VocabularyStore';

export const initStores = () => {
  ExerciseStore();
  LanguageStore();
  ProfileStore();
  VocabularyStore();
}
