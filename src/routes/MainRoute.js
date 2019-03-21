// LIST IMPORT MODULE
import React, { Component } from 'react';
import { Route, Switch, Link } from "react-router-dom";
import { connect } from "unistore/react";
import { withRouter } from "react-router-dom";
import { actions } from '../Store';

// LIST IMPORT COMPONENT
import Home from "../pages/Home";
import Auth from '../pages/Auth';
import Profile from '../pages/Profile';
import Detail from '../pages/Detail';

// MAIN CLASS
class MainRoute extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={ Home } />
        <Route exact path="/auth" component={ Auth } />
        <Route exact path="/profile" component={ Profile } />
        <Route exact path="/detail" component={ Detail } />
      </Switch>
    );
  }
}

// EXPORT THE MAIN CLASS
export default connect(
  "x", actions)
(withRouter(MainRoute));
