import React, { Component } from 'react';
import './header.css';

import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import Home from "../pages/Home";
import Stuff from "../pages/Stuff";
import Contact from "../pages/Contact";

class HeaderContainer extends React.Component {
  render() {
    return (
        <HashRouter>
          <div>
            <ul className="header">
              <li><NavLink exact to="/">Home</NavLink></li>
              <li><NavLink to="/stuff">Stuff</NavLink></li>
              <li><NavLink to="/contact">Contact</NavLink></li>
            </ul>
          </div>
          <div className="content">
            <Route exact path="/" component={Home}/>
            <Route path="/stuff" component={Stuff}/>
            <Route path="/contact" component={Contact}/>
          </div>
        </HashRouter>
    );
  }
}

export default HeaderContainer;
