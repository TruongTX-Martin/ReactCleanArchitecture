/* eslint-disable */

import React, { Component } from "react";
import LoadingOverlay from "react-loading-overlay";
export interface IProps {
}
interface IState {
}
class Login extends Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);

  }
  render() {
    return (
      <LoadingOverlay className="_loading_overlay_wrapper_custom" style={{ backgroundColor: '#FFFFFF' }} active={false} spinner>
        <div className="app mr-3 ml-3" style={{ backgroundColor: '#FFFFFF' }}>
          Login
        </div>
      </LoadingOverlay>
    );
  }
}

export default Login;
