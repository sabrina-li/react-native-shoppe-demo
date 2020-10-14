import { AppState } from '../store';

export const subtotalSelector = (state: AppState) => state.itemsState.reduce((acc, cur) => acc + cur.price * cur.quantity, 0);