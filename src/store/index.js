import { createStore } from 'vuex'
import session from './session'
import sessionErrors from './session/errors'

const defaultState = {};

export default createStore({
  state() {
    return defaultState;
  },
  modules: {
    session,
    sessionErrors
  }
});
