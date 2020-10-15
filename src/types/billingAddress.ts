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
};

export const Months = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

//TODO: load from current year
export const Years = [2020, 2021, 2022, 2023, 2024, 2025, 2026, 2027, 2028, 2029];