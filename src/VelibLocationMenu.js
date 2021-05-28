import './App.css';
import React from "react";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavigationBar from './components/NavigationBar';
import Map from './components/Map'

function VelibLocationMenu() {

  return (
    <div className="App">
      <React.Fragment>
        <Router>
          <NavigationBar className="App-header"/>
        </Router>
      </React.Fragment>
      <div>
        <Map/>
      </div>
    </div>
  );
}

export default VelibLocationMenu;
