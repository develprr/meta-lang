import {connectToState, setState, setStore} from 'metamatic';

export const STORE_ROUTE = 'STORE_ROUTE';

export const RouteStore = () => setStore(STORE_ROUTE, {
  route: getCurrentRoute()
});

export const navigateTo = (url) => {
  window.history.pushState({}, "", url);
  setState(STORE_ROUTE, 'route', url);
}

export const getCurrentRoute = () => window.location.pathname;

export const connectToRoute = (listener, callback) => connectToState(listener, STORE_ROUTE, 'route', callback);
