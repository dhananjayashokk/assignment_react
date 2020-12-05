import axios from "axios";

import {config} from '../config';


const register = (username, email, password) => {
  return axios.post(config.API_URL + "signup", {
    
    username,
    email,
    password,
  });
};

const login = (username, password) => {
  return axios({
    method: 'post',
    url: config.API_URL + "signin",
    auth: {
      username: username,
      password: password
    },
    data:{
      username,password
    }
    })
    .then((response) => {
      console.log("login response",response.data[0])
      if (response.data) {
        localStorage.setItem("user", JSON.stringify(response.data[0]));
      }

      return response.data;
    });
};

const logout = () => {
  localStorage.removeItem("user");
};

export default  {
  register,
  login,
  logout,
};