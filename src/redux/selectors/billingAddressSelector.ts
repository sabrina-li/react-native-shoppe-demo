import { BillingAddress } from '../../types/billingAddress';
import { AppState } from '../store';

export const billingAddressSelector = (state: AppState) => state.billingAddressState;