import { createStore } from 'vuex'
import alerts from './alerts'
import session from './session'
import password from './password'

const defaultState = {};

export default createStore({
  state() {
    return defaultState;
  },
  modules: {
    alerts,
    session,
    password
  }
});
