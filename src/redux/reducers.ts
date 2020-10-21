import { combineReducers } from 'redux';
import billingAddressReducer from './billingAddress/billingAddressReducer';
import itemsReducer from './items/ItemReducer';

export const rootReducer = combineReducers({
  itemsState: itemsReducer,
  billingAddressState: billingAddressReducer,
});

export default rootReducer;