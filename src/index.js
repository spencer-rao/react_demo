/*
 * @Description: router 
 * @Author: zhang yumei
 * @Date: 2021-02-02 16:23:32
 * @LastEditTime: 2021-02-05 10:39:12
 * @LastEditors: zhang yumei
 */
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter as Router, Route } from "react-router-dom"

ReactDOM.render(
  <Router>
    <Route path="/" component={App} />
  </Router>,
  document.getElementById('root')
);
// reportWebVitals();
