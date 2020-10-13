import React from "react";
import ReactDOM, { render, unmountComponentAtNode } from "react-dom";
import TestUtils, { act } from 'react-dom/test-utils';
import { fireEvent } from '@testing-library/react';
import LoginForm from "../presentation/views/login/Login";
import AuthRepositoryImpl from '../data/AuthRepositoryImpl';

let container = null;
beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement("div");
  // container *must* be attached to document so events work correctly.
  document.body.appendChild(container);
});

afterEach(() => {
  // cleanup on exiting
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

it('can render and update a counter', async () => {
  await act(async () => {
    const authRepository = new AuthRepositoryImpl();
    ReactDOM.render(<LoginForm authRepository={authRepository} />, container);
  });
  const buttonSignIn = document.querySelector("[data-testid=btn_signin]");
  // const emailInput =  container.querySelector("[data-testid='email']");
  
  //incase user does not input email
  act(() => {
    buttonSignIn.dispatchEvent(new MouseEvent("click", { bubbles: true }));
  });
  const emailError =  container.querySelector("[data-testid='email_error']")?.textContent;
  expect(emailError).toEqual('Email cannot be empty');
});

