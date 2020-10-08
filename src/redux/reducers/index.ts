import { combineReducers } from 'redux';
import itemsReducer from './ItemReducer';

export const rootReducer = combineReducers({
  itemsState: itemsReducer,
});

export default rootReducer;