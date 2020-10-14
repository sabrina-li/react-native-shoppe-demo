export type BillingAddress = {
  firstName: string;
  lastName: string;
  address1: string;
  address2: string;
  city: string;
  state: States;
  zipCode: number;
};

export enum States {
  AL = "AL",
  AK = "AK"
}

