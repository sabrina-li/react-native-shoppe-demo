import { PaymentInfo } from "../../types/paymentInfo";
import { AppState } from "../store";

export const paymentInfoSelector = (state: AppState): PaymentInfo => state.paymentInfoState;