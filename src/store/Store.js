import rootReducer from './Reducers';
import {createStore} from 'redux';

export const store = createStore(rootReducer);