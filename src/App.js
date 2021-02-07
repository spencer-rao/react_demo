/*
 * @Description:  App
 * @Author: zhang yumei
 * @Date: 2021-02-03 10:09:15
 * @LastEditTime: 2021-02-05 20:08:25
 * @LastEditors: zhang yumei
 */
import React from 'react'
import { BrowserRouter as Router, NavLink, Link, Route } from "react-router-dom"
import "./App.less"
import Home from './components/Home.js';
import Login from './components/Login.js';
import Game from './components/Game/Game.js';
import Mark from './components/Mark.js';
export default class App extends React.Component {
  render() {
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
}

