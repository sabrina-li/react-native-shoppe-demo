import { Months, Years } from "../../types/billingAddress";
import { PaymentInfo } from "../../types/paymentInfo";

const initialState: PaymentInfo = {
  creditCardNumber: ['', false],
  month: ['', false],
  year: ['', false],
  securityCode: ['', false],
}

const paymentInfoReducer = ((state: PaymentInfo = initialState, action): PaymentInfo => {
  switch (action.type) {
    case 'SET_CREDIT_CARD_NUMBER': {
      // validate credit cart number
      const error = null !== action.payload?.match('\d{16}');
      const creditCardNumber: [string, boolean] = [action.payload, error];
      const newState = { ...state, creditCardNumber };
      return newState;
    }
    case 'SET_MONTH': {
      // validate Month
      const m = Number.parseInt(action.payload, 10);
      const error = !isNaN(m) && m < Math.min(...Months) && m > Math.max(...Months);
      const month: [string, boolean] = [action.payload, error];
      const newState = { ...state, month };
      return newState;
    }
    case 'SET_YEAR': {
      // validate Year
      const y = Number.parseInt(action.payload, 10);
      const error = !isNaN(y) && y < Math.min(...Years) && y > Math.max(...Years);
      const year: [string, boolean] = [action.payload, error];
      const newState = { ...state, year };
      return newState;
    }
    case 'SET_SECURITY_CODE': {
      // validate security code
      const error = null !== action.payload?.match('\d{3}');
      const securityCode: [string, boolean] = [action.payload, error];
      const newState = { ...state, securityCode };
      return newState;
    }
    default:
      return state
  }
});

export default paymentInfoReducer;