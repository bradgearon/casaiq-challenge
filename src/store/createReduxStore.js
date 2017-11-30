import { createStore } from 'redux';
import devToolsEnhancer from 'remote-redux-devtools';
import rootReducer from '../reducers';

export default function createReduxStore(initialState) {
  return createStore(rootReducer, initialState, devToolsEnhancer());
}
