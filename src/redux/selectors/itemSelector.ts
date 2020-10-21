import { Product } from '../../types/product';
import { AppState } from '../store';

export const itemSelector = (state: AppState): Product[] => state.itemsState;