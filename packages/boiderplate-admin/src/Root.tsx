import React, { Component } from "react";
import { HashRouter, Route, Switch } from "react-router-dom";
import "./scss/style.scss";
// import Login from "./containers/Login";
import Login from "./presentation/views/login/Login";
import LoginUseCase from './domain/interactors/login/LoginUseCase';
import AuthHolder from './domain/entity/login/models/AuthHolder';
import AuthFakeApi from './data/AuthFakeApi';
import LoginViewModelImpl from './presentation/views/login/LoginViewModelImpl';


const loading = () => (
  <div className="animated fadeIn pt-3 text-center">Loading...</div>
);

class Root extends Component {
  loginViewModel = null;

  constructor(props) {
    super(props);
    //data  layer
    const authRepository = new AuthFakeApi();
    //domain layer
    const authHolder = new AuthHolder();
    const loginUseCase = new LoginUseCase(authRepository, authHolder);
    //view layer
    this.loginViewModel = new LoginViewModelImpl(loginUseCase, authHolder);
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
                render={props => <Login loginViewModel={this.loginViewModel} props={props}  />}
              />
              <Route path="/" render={props => <Login loginViewModel={this.loginViewModel} props={props} />} />
            </Switch>
          </Route>
        </React.Suspense>
      </HashRouter>
    );
  }
}

export default Root;
