import { combineReducers } from 'redux';

import devices from './devices';
import history from './history';

const reducers = combineReducers({ devices, history });

export default reducers;
