import { BillingAddress, States } from "../../types/billingAddress";
import { BillingAddressActions } from "./billingAddressActions";

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
      const error = action.payload === '';
      const firstName: [string, boolean] = [action.payload, error];
      const newState = { ...state, firstName };
      return newState;
    }
    case 'SET_LAST_NAME': {
      // validate lase name
      const error = action.payload === '';
      const lastName: [string, boolean] = [action.payload, error];
      const newState = { ...state, lastName };
      return newState;
    }
    case 'SET_ADDRESS_1': {
      // validate address 1
      const error = action.payload === '';
      const address1: [string, boolean] = [action.payload, error];
      const newState = { ...state, address1 };
      return newState;
    }
    case 'SET_ADDRESS_2': {
      // validate address 2
      const error = action.payload === '';
      const address2: [string, boolean] = [action.payload, error];
      const newState = { ...state, address2 };
      return newState;
    }
    case 'SET_USA_STATE': {
      // validate state
      const error = !(action.payload in States);
      const usaState: [States, boolean] = [action.payload, error];
      const newState  = { ...state, usaState };
      return newState;
    }
    case 'SET_ZIP_CODE': {
      // validate zip code
      const error = null !== action.payload?.match('\d{5}');
      const zipCode: [string, boolean] = [action.payload, error];
      const newState = { ...state, zipCode };
      return newState;
    }
    case 'SET_CITY': {
      // validate first name
      const error = action.payload === '';
      const city: [string, boolean] = [action.payload, error];
      const newState = { ...state, city };
      return newState;
    }
    default:
      return state
  }
});

export default billingAddressReducer;