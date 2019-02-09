import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Calculator from "./calculator-views/Calculator";
import Navigation from "./navigation";
import Home from "./Home";
import About from "./About";



export default class Page extends Component {
  render() {
    return (

      
      
        <BrowserRouter>
        <div>
          <Navigation />
          <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/calculator" component={Calculator} />
            <Route path="/about" component={About} />
          </Switch>
        </div>
      </BrowserRouter>
     
    );
  }
}
