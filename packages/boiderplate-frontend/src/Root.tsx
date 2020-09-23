import React, { Component } from "react";
import { HashRouter, Route, Switch } from "react-router-dom";
import "./scss/style.scss";
// import Login from "./containers/Login";
import Login from "./presentation/views/login/Login";
import LoginUseCase from './domain/usecase/auth/LoginUseCase';
import AuthRepositoryImpl from './data/AuthRepositoryImpl';
import LoginViewModelImpl from './presentation/views/login/LoginViewModelImpl';


const loading = () => (
  <div className="animated fadeIn pt-3 text-center">Loading...</div>
);

class Root extends Component {
  loginViewModel = null;

  constructor(props) {
    super(props);
    //data  layer
    const authRepository = new AuthRepositoryImpl();
    //domain layer
    const loginUseCase = new LoginUseCase(authRepository);
    //view layer
    this.loginViewModel = new LoginViewModelImpl(loginUseCase);
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
