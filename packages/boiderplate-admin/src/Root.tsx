import React, { Component } from "react";
import { HashRouter, Route, Switch } from "react-router-dom";
import "./scss/style.scss";
import history from "./constants/history";
import Login from "./containers/Login";

const loading = () => (
  <div className="animated fadeIn pt-3 text-center">Loading...</div>
);

class Root extends Component {
  render() {
    return (
      <HashRouter>
        <React.Suspense fallback={loading()}>
          <Route history={history}>
            <Switch>
              <Route
                exact
                path="/login"
                render={props => <Login {...props} />}
              />
              <Route path="/" render={props => <Login {...props} />} />
            </Switch>
          </Route>
        </React.Suspense>
      </HashRouter>
    );
  }
}

export default Root;
