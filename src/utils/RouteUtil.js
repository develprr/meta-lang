import {connectToState, setStore} from 'metamatic';

// Define the Route event name as constant
export const STORE_URL = 'STORE_URL';

export const broadcastCurrentUrl = () => setStore(STORE_URL, {
  url: getBrowserUrl()
});

// Calling navigateTo will set a new browser URL and broadcast a URL change event.
export const updateUrl = (url) => {
  window.history.pushState({}, '', url);
  setStore(STORE_URL, {url});
}

export const connectToUrl = (listener, callback) => connectToState(listener, STORE_URL, 'url', callback);

const getBrowserUrl = () => window.location.pathname;

export const matchRoute = (pattern, component) => getBrowserUrl().match(pattern) && component;


