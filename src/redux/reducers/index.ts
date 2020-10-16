import { combineReducers } from 'redux';
import billingAddressReducer from './billingAddressReducer';
import itemsReducer from './ItemReducer';

export const rootReducer = combineReducers({
  itemsState: itemsReducer,
  billingAddressState: billingAddressReducer,
});

export default rootReducer;