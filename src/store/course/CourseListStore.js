import {initStore} from 'metamatic'

export const STORE_LANGUAGE = 'STORE_LANGUAGE';

export const LanguageStore = () => initStore(STORE_LANGUAGE, getInitialStore());

const getInitialStore = () => ({
  languages: []
});
