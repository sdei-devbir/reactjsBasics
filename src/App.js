import React, { Component } from 'react';
// import { BrowserRouter as Router, Route, Link } from "react-router-dom"
import { Route, Switch, Redirect } from "react-router-dom";
// import dashboardRoutes from "./routes/dashboard.jsx";

import logo from './logo.svg';
import './App.css';

import dashboardRoutes from "./routes/dashboard"; 
import List from "./components/list"; 
import { NavLink } from "react-router-dom";
  
class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload!!
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          <NavLink
            to="/about"
            className="nav-link"
            activeClassName="active"
          >
         
            <p>About</p>
          </NavLink>
          <NavLink
            to="/login"
            className="nav-link"
            activeClassName="active"
          >
          
            <p>Login</p>
          </NavLink>
          <NavLink
            to="/list"
            className="nav-link"
            activeClassName="active"
          >
          
            <p>List</p>
          </NavLink>
          <NavLink
            to="/form"
            className="nav-link"
            activeClassName="active"
          >
          
            <p>Form</p>
          </NavLink>
          <NavLink
            to="/post"
            className="nav-link"
            activeClassName="active"
          >
          
            <p>Post</p>
          </NavLink>
        </header>

        <Switch>
            {dashboardRoutes.map((prop, key) => {              
              
              return (
                <Route path={prop.path} component={prop.component} key={key} />
              );
            })}
          </Switch>
          <Route  component={List}  />
      </div>
    );
  }
}

export default App;
