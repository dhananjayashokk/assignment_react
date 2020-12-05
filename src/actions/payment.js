import {
    PAYMENT_SUCCESS,
    PAYMENT_FAILURE
  } from "./types";
  
  import PaymentService from "../services/payment.service";
  
  export const create_order = (amount,user_id) => (dispatch) => {
    return PaymentService.create_order(amount,user_id).then(
      (response) => {
        console.log("response",response)
        return PaymentService.capture_order(amount,response.data["payment_details"].id,user_id).then(
          (response) => {
            dispatch({
              type: PAYMENT_SUCCESS,
            });
      
            return Promise.resolve();
          },
          (error) => {
      
            dispatch({
              type: PAYMENT_FAILURE,
            });
      
            return Promise.reject();
          }
        );
      },
      (error) => {
  
        dispatch({
          type: PAYMENT_FAILURE,
        });
  
        return Promise.reject();
      }
    );
  };
  
  
  