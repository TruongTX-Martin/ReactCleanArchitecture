import React, { Component } from "react";
import { HashRouter, Route, Switch } from "react-router-dom";
import "./scss/style.scss";
// import Login from "./containers/Login";
import Login from "./presentation/views/login/Login";
import AuthRepositoryImpl from './data/AuthRepositoryImpl';

const loading = () => (
  <div className="animated fadeIn pt-3 text-center">Loading...</div>
);

class Root extends Component {
  authRepository = null

  constructor(props) {
    super(props);
    this.authRepository = new AuthRepositoryImpl();
  }
  


  render() {
    return (
      <HashRouter>
        <React.Suspense fallback={loading()}>
          <Route>
            <Switch>
              <Route
                exact
                path="/login"
                render={props => <Login authRepository={this.authRepository} {...props} />}
              />
              <Route path="/" render={props => <Login authRepository={this.authRepository} {...props} />} />
            </Switch>
          </Route>
        </React.Suspense>
      </HashRouter>
    );
  }
}

export default Root;
