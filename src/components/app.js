import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import NavigationContainer from "./navigation/navigation-container";import Home from "./pages/home";
import About from "./pages/about";
import Auth from "./pages/auth";
import Contact from "./pages/contact";
import Blog from "./pages/blog";

export default class App extends Component {
  render() {
    return (
      <div className="app">
        <Router>
          <div>
            <h1>Practice App</h1>
            <h2>By... Alan Hernandez</h2>
            <NavigationContainer />

            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/about-me" component={About} />
              <Route path="/contact" component={Contact} />
              <Route path="/blog" component={Blog} />
              <Route path="/auth" component={Auth} />
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}