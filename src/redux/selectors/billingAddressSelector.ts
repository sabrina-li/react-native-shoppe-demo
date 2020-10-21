import { AppState } from "../store";
import { BillingAddress } from "../../types/billingAddress";

export const billingAddressSelector = (state: AppState): BillingAddress => state.billingAddressState;