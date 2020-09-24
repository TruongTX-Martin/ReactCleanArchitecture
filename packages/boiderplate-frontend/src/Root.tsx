import React, { Component } from "react";
import { HashRouter, Route, Switch } from "react-router-dom";
import "./scss/style.scss";
import Login from "./presentation/views/login/Login";
import ListPoll from './presentation/views/listpoll/ListPoll';
import PollRepositoryImpl from './data/PollRepositoryImpl';
import AuthRepositoryImpl from './data/AuthRepositoryImpl';



const loading = () => (
  <div className="animated fadeIn pt-3 text-center">Loading...</div>
);

class Root extends Component {
  pollRepository = null;

  authRepository = null;

  constructor(props) {
    super(props);
    this.pollRepository = new PollRepositoryImpl();
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
                render={props => <Login authRepository={this.authRepository} props={props} />}
              />
              <Route path="/" render={props => <ListPoll pollRepository={this.pollRepository} props={props} />} />
            </Switch>
          </Route>
        </React.Suspense>
      </HashRouter>
    );
  }
}

export default Root;
