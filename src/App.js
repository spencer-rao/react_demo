/*
 * @Description:  App
 * @Author: zhang yumei
 * @Date: 2021-02-03 10:09:15
 * @LastEditTime: 2021-02-07 16:22:30
 * @LastEditors: zhang yumei
 */
import React from 'react'
import { BrowserRouter as Router, NavLink, Link, Route } from "react-router-dom"
import "./App.less"
import Home from './components/Home.js';
import Login from './components/Login.js';
import Game from './components/Game/Game.js';
import Mark from './components/Mark/Mark.js';
import { useState } from "react"
function App() {
  return (
    <div className="App">
      <Router>
        <div className="title">
          <h1>三子棋</h1>
        </div>
        <div className="link">
          <Link to="/home">首页</Link>{" "}
          <Link to="/login">登录</Link>{" "}
          <Link to="/game">游戏</Link>{" "}
          <Link to="/mark">记录</Link>{" "}
          <NavLink to="/">返回</NavLink>
        </div>
        <div className={"index"}>
          <Route path="/home" component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/game" component={Game} />
          <Route path="/mark" component={Mark} />
        </div>
      </Router>
    </div>
  );
}
export default App;
