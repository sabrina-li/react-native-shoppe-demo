import { combineReducers } from 'redux';
import { Product } from '../../types/product';

const INITIAL_STATE = {
  items: {}
};

const itemsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'ADD_ITEM': {
      
      const { items } = state;

      const newItem = action.payload as Product;
      newItem.quantity = 1;
      
      // And put the new item
      items[newItem.id] ? items[newItem.id].quantity++ : items[newItem.id] = newItem;

      // Finally, update the redux state
      const newState = { items };
      return newState;
    }

    default:
      return state
  }
};

export default combineReducers({
  items: itemsReducer
});