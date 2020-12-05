import { PAYMENT_SUCCESS,
    PAYMENT_FAILURE } from "../actions/types";

const initialState = {};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case PAYMENT_SUCCESS:
      return { payment: true };

    case PAYMENT_FAILURE:
      return { payment: false };

    default:
      return state;
  }
}