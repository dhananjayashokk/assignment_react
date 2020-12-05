import React, { useState, useEffect } from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";


import {Provider} from 'react-redux';
import store from './store';
import Routes from './routes/routes'


const App = () => {

  return (
    <Provider store={store}> 
      <Routes /> 
    </Provider>
  )
}



export default App;