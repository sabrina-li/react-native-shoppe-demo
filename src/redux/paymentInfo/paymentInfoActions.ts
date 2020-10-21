export const PaymentInfoActions = {
  setCreditCartNumber: (ccNumber: string) => {
    return {
      type: 'SET_CREDIT_CARD_NUMBER',
      payload: ccNumber,
    }
  },
  setMonth: (month: string) => {
    return {
      type: 'SET_MONTH',
      payload: month,
    }
  },
  setYear: (year: string) => {
    return {
      type: 'SET_YEAR',
      payload: year,
    }
  },
  setSecurityCode: (securityCode: string) => {
    return {
      type: 'SET_SECURITY_CODE',
      payload: securityCode,
    }
  },
}