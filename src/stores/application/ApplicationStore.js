// a store to manage application states

import {initStore, setState} from 'metamatic';

export const STORE_APPLICATION = 'STORE_APPLICATION';

export const ApplicationStore = () => initStore(STORE_APPLICATION, getInitialStore());

const getInitialStore = () => ({
  activeView: 'language'
});

export const navigateTo = (url) => {
  window.history.pushState({}, "", url);
  setState(STORE_APPLICATION, 'activeView', url);
}
