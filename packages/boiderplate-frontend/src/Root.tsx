import React, { Component } from "react";
import { HashRouter, Route, Switch } from "react-router-dom";
import "./scss/style.scss";
// import Login from "./containers/Login";
import Login from "./presentation/views/login/Login";
import LoginUseCase from './domain/usecase/auth/LoginUseCase';
import AuthRepositoryImpl from './data/AuthRepositoryImpl';
import LoginViewModelImpl from './presentation/views/login/LoginViewModelImpl';

//list poll
import ListPoll from './presentation/views/listpoll/ListPoll';
import GetListPollUseCase from './domain/usecase/poll/GetListPollUseCase';
import PollRepositoryImpl from './data/PollRepositoryImpl';
import ListPollViewModelImpl from './presentation/views/listpoll/ListPollViewModelImpl';


const loading = () => (
  <div className="animated fadeIn pt-3 text-center">Loading...</div>
);

class Root extends Component {
  loginViewModel = null;

  listPollViewModel = null;

  constructor(props) {
    super(props);
    //data  layer
    const authRepository = new AuthRepositoryImpl();
    //domain layer
    const loginUseCase = new LoginUseCase(authRepository);
    //view layer
    this.loginViewModel = new LoginViewModelImpl(loginUseCase);

    const pollRepository = new PollRepositoryImpl();
    const getListPollUseCase = new GetListPollUseCase(pollRepository);
    this.listPollViewModel = new ListPollViewModelImpl(getListPollUseCase);
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
              <Route path="/" render={props => <ListPoll listPollViewModel={this.listPollViewModel} props={props} />} />
            </Switch>
          </Route>
        </React.Suspense>
      </HashRouter>
    );
  }
}

export default Root;
