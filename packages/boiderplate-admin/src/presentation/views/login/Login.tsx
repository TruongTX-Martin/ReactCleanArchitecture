import React, { Component } from 'react';
import { Button, Card, CardBody, CardGroup, Col, Container, Form, Input, InputGroup, InputGroupAddon, InputGroupText, Row } from 'reactstrap';
import LoadingOverlay from "react-loading-overlay";
import BaseView from '../base/BaseView';
import LoginViewModel from './LoginViewModel';
import LoginUseCase from '../../../domain/usecase/auth/LoginUseCase';
import LoginViewModelImpl from './LoginViewModelImpl';

export interface LoginProps {
    authRepository : any;
}

export interface LoginState {
    email: string;
    password: string;
    emailError: string;
    passwordError: string;
    loading: boolean;
    textDemo: string;

}

export default class Login extends Component<LoginProps, LoginState> implements BaseView {
    private loginViewModel: LoginViewModel;

    private textInputEmail: any;

    public constructor(props: LoginProps) {
        super(props);
        const { authRepository } = this.props;
        //domain layer
        const loginUseCase = new LoginUseCase(authRepository);
        //view layer
        this.loginViewModel = new LoginViewModelImpl(loginUseCase);
        this.state = {
            email: this.loginViewModel.email,
            password: this.loginViewModel.password,
            emailError: this.loginViewModel.emailError,
            passwordError: this.loginViewModel.passwordError,
            loading: this.loginViewModel.loading,
            textDemo: 'Truongtechno'
        };
    }

    componentDidMount() {
        this.loginViewModel.attachView(this);
    }

    componentWillUnmount() {
        this.loginViewModel.detachView();
    }


    onViewModelChanged(): void {
        this.setState({
            email: this.loginViewModel.email,
            emailError: this.loginViewModel.emailError,
            password: this.loginViewModel.password,
            passwordError: this.loginViewModel.passwordError,
            loading: this.loginViewModel.loading,
        });
    }


    render() {
        const { email, password, emailError, passwordError, loading } = this.state;
        return (
          <LoadingOverlay className="_loading_overlay_wrapper_custom" style={{ backgroundColor: '#FFFFFF' }} active={loading} spinner>
            <div className="app flex-row align-items-center">
              <Container>
                <Row className="justify-content-center">
                  <Col md="8">
                    <CardGroup>
                      <Card className="p-4">
                        <CardBody>
                          <Form data-testid="login-form">
                            <h1>Login</h1>
                            <p className="text-muted">Sign In to your account</p>
                            <InputGroup className="mb-3">
                              <InputGroupAddon addonType="prepend">
                                <InputGroupText>
                                  <i className="icon-user"></i>
                                </InputGroupText>
                              </InputGroupAddon>
                              <Input 
                                ref={(node) => this.textInputEmail = node}
                                data-testid="email"
                                type="text" 
                                placeholder="Email" 
                                autoComplete="email"
                                value={email}
                                onChange={(e) => {
                                  this.loginViewModel.onEmailChanged(e.currentTarget.value);
                              }}
                              />
                            </InputGroup>
                            {
                              emailError?.length > 0 &&
                              <p data-testid="email_error" style={{ color: 'red' }}>{emailError}</p>
                          }
                            <InputGroup className="mb-4">
                              <InputGroupAddon addonType="prepend">
                                <InputGroupText>
                                  <i className="icon-lock"></i>
                                </InputGroupText>
                              </InputGroupAddon>
                              <Input 
                                data-testid="password"
                                type="password" 
                                placeholder="Password" 
                                autoComplete="current-password"
                                value={password}
                                onChange={(e) => {
                                this.loginViewModel.onPasswordChanged(e.currentTarget.value);
                            }}
                              />
                            </InputGroup>
                            <p data-testid="message_error" style={{ color: 'red' }}>{passwordError}</p>
                            <Row>
                              <Col xs="6">
                                <Button 
                                  data-testid="btn_signin"
                                  color="primary" 
                                  className="px-4"
                                  onClick={() => this.loginViewModel.onClickSignIn()}
                                >
                                  Login
                                </Button>
                              </Col>
                              <Col xs="6" className="text-right">
                                <Button color="link" className="px-0">Forgot password?</Button>
                              </Col>
                            </Row>
                          </Form>
                        </CardBody>
                      </Card>
                    </CardGroup>
                  </Col>
                </Row>
              </Container>
            </div>
          </LoadingOverlay>
          );
    }
}
