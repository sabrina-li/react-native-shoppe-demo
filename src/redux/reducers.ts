import { combineReducers } from 'redux';
import billingAddressReducer from './billingAddress/billingAddressReducer';
import paymentInfoReducer from './paymentInfo/paymentInfoReducers';
import itemsReducer from './items/ItemReducer';

export const rootReducer = combineReducers({
  itemsState: itemsReducer,
  billingAddressState: billingAddressReducer,
  paymentInfoState: paymentInfoReducer,
});

export default rootReducer;