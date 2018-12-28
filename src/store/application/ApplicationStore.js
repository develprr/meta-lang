// a store to manage application states

import {initStore} from 'metamatic';

export const STORE_APPLICATION = 'STORE_APPLICATION';

export const ApplicationStore = () => initStore(STORE_APPLICATION, getInitialStore());

const getInitialStore = () => ({
  activeView: 'language'
});
