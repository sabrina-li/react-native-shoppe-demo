import { BillingAddress } from "../../types/billingAddress";
import { BillingAddressActions } from "../actions/billingAddressActions";

const initialState: BillingAddress = {
  firstName: ['', false],
  lastName: ['', false],
  address1: ['', false],
  address2: ['', false],
  usaState: [null, false],
  zipCode: ['', false],
  city: ['', false],
}

const billingAddressReducer = ((state: BillingAddress = initialState, action): BillingAddress => {
  switch (action.type) {
    case 'SET_FIRST_NAME': {
      // validate first name
      let error = action.payload === '';
      const firstName: [string, boolean] = [action.payload, error];
      const newState = { ...state, firstName };
      return newState;
    }
    default:
      return state
  }
});

export default billingAddressReducer;