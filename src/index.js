/*
 * @Description:  
 * @Author: zhang yumei
 * @Date: 2021-02-02 16:23:32
 * @LastEditTime: 2021-02-02 18:04:50
 * @LastEditors: zhang yumei
 */
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Switch,Route } from "react-router-dom"

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Route path="/" component={App}>
      </Route>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
reportWebVitals();
