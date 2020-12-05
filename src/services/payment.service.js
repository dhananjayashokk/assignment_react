import axios from "axios";

import {config} from '../config';


const create_order = (amount) => {
  return axios.post(config.API_URL + "order",{amount});
};

const capture_order = (amount, order_id,user_id) => {
  
  return axios({
    method: 'post',
    url: config.API_URL + "capture",
    data:{
      amount,paymentId:order_id,user_id
    }
    })
    .then((response) => {
      console.log("login response",response.data[0])

      return response.data;
    });
};



export default  {
  create_order,
  capture_order
};