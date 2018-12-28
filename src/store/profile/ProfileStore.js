import {initStore} from 'metamatic'

export const STORE_PROFILE = 'STORE_PROFILE';

export const ProfileStore = () => initStore(STORE_PROFILE, getInitialStore());

const getInitialStore = () => ({
  user: {
    type: 'visitor'
  },
  skill: {
    vocabulary: {}
  }
});
