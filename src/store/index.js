import { createStore } from 'vuex'
import session from './session'

const defaultState = {};

export default createStore({
  state() {
    return defaultState;
  },
  modules: {
    session
  }
});
