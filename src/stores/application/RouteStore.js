import {setState} from 'metamatic';

// Define the Route Stores name as constant
export const STORE_ROUTE = 'STORE_ROUTE';

// Calling navigateTo will update STORE_ROUTE and fire a routing event.
export const navigateTo = (url) => {
  window.history.pushState({}, "", url);
  setState(STORE_ROUTE, 'route', url);
}
