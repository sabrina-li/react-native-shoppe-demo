import { Product } from '../../types/product';

const itemsReducer = (state: Product[] = [], action) => {
  switch (action.type) {
    case 'ADD_ITEM': {
      const newItem = action.payload as Product;
      newItem.quantity = 1;

      const newItemsState = state.map(i => {
        if (newItem.id === i.id) {
          newItem.quantity += i.quantity;
          return newItem;
        }
        return i;
      });

      if (newItem.quantity === 1) newItemsState.push(newItem);
      return newItemsState;
    }
    case 'REMOVE_ITEM': {
      const removeItem = action.payload as Product;
      removeItem.quantity = 1;

      const newItemsState = state.map(i => {
        if (removeItem.id === i.id) {
          removeItem.quantity = i.quantity - 1;
          return removeItem;
        }
        return { ...i };
      }).filter(i => i.quantity > 0);

      return newItemsState
    }
    default:
      return state
  }
};

export default itemsReducer;