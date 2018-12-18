import {initStore} from 'metamatic'

export const STORE_VOCABULARY = 'STORE_VOCABULARY';

export const VocabularyStore = () => initStore(STORE_VOCABULARY, getInitialStore());

const getInitialStore = () => ({
  entries: []
});
