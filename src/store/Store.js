import {rootReducer} from './RootReducer';
import {createStore} from 'redux';

export const store = createStore(rootReducer);