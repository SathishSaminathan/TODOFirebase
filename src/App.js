import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Navbar from "./components/layout/Navbar";
import Dashboard from "./components/dashboard/Dashboard";
import { initializeFirebase, askForPermissioToReceiveNotifications } from "./push-notification";

import "./App.css";

class App extends Component {

  componentDidMount(){
    // askForPermissioToReceiveNotifications();
    // initializeFirebase();
  }

  render() {
    // 
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Switch>
            <Route exact path="/" component={Dashboard} />
            <Route render={()=><h3>Not Found</h3>}/>
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
