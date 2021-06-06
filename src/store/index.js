import { createStore } from 'vuex'
import session from './session'
import password from './password'

const defaultState = {};

export default createStore({
  state() {
    return defaultState;
  },
  modules: {
    session,
    password
  }
});
