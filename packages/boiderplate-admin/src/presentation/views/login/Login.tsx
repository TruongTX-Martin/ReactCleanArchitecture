import React, { Component } from 'react';
import { Button, Card, CardBody, CardGroup, Col, Container, Form, Input, InputGroup, InputGroupAddon, InputGroupText, Row } from 'reactstrap';
import BaseView from '../base/BaseView';
import LoginViewModel from './LoginViewModel';


export interface LoginProps {
    loginViewModel: LoginViewModel;
    props: any
}

export interface LoginState {

}


export default class Login extends Component<LoginProps, LoginState> implements BaseView {
    private loginViewModel: LoginViewModel;

    public constructor(props: LoginProps) {
        super(props);
        const { loginViewModel } = this.props;
        this.loginViewModel = loginViewModel;
        this.state = {};
    }

    componentDidMount() {
        this.loginViewModel.attachView(this);
    }

    componentWillUnmount() {
        this.loginViewModel.detachView();
    }


    onViewModelChanged(): void {
        throw new Error('Method not implemented.');
    }


    render() {
        return (
          <div className="app flex-row align-items-center">
            <Container>
              <Row className="justify-content-center">
                <Col md="8">
                  <CardGroup>
                    <Card className="p-4">
                      <CardBody>
                        <Form>
                          <h1>Login</h1>
                          <p className="text-muted">Sign In to your account</p>
                          <InputGroup className="mb-3">
                            <InputGroupAddon addonType="prepend">
                              <InputGroupText>
                                <i className="icon-user"></i>
                              </InputGroupText>
                            </InputGroupAddon>
                            <Input type="text" placeholder="Username" autoComplete="username" />
                          </InputGroup>
                          <InputGroup className="mb-4">
                            <InputGroupAddon addonType="prepend">
                              <InputGroupText>
                                <i className="icon-lock"></i>
                              </InputGroupText>
                            </InputGroupAddon>
                            <Input type="password" placeholder="Password" autoComplete="current-password" />
                          </InputGroup>
                          <Row>
                            <Col xs="6">
                              <Button color="primary" className="px-4">Login</Button>
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
          );
    }
}
