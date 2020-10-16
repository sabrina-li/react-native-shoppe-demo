// TODO: move to enum types
export const BillingAddressActions = {
  setFirstName: (firstName: string) => {
    return {
      type: 'SET_FIRST_NAME',
      payload: firstName,
    }
  },
  setLastName: (lastName: string) => {
    return {
      type: 'SET_LAST_NAME',
      payload: lastName,
    }
  },
  setAddress1: (address1: string) => {
    return {
      type: 'SET_ADDRESS_1',
      payload: address1,
    }
  },
  setAddress2: (address2: string) => {
    return {
      type: 'SET_ADDRESS_2',
      payload: address2,
    }
  },
  setCity: (city: string) => {
    return {
      type: 'SET_CITY',
      payload: city,
    }
  },
  setUSAState: (usaState: string) => {
    return {
      type: 'SET_USA_STATE',
      payload: usaState,
    }
  },
  setZipCode: (zipCode: string) => {
    return {
      type: 'SET_ZIP_CODE',
      payload: zipCode,
    }
  }
}