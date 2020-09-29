import React from "react";
import ReactDOM, { render, unmountComponentAtNode } from "react-dom";
import { act } from 'react-dom/test-utils';
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
  // const inputData = {
  //   email: "test@gmail.com",
  //   password: "123456",
  // };
  // jest.spyOn(global, "fetch").mockImplementation(() =>
  //   Promise.resolve({
  //     json: () => Promise.resolve(inputData)
  //   })
  // );
  await act(async () => {
    const authRepository = new AuthRepositoryImpl();
    ReactDOM.render(<LoginForm authRepository={authRepository} />, container);
  });
  const buttonSignIn = document.querySelector("[data-testid=btn_signin]");
  const messageErrorTest =  container.querySelector("[data-testid='message_error']").textContent;
  // container.querySelector("[data-testid='email']").innerHTML = 'truongbkit@gmail.com';
  const emailValue =  container.querySelector("[data-testid='email']").innerHTML;
  console.log('emailValue:', emailValue);
  console.log('messageErrorTestBefore:', messageErrorTest);
  
  act(() => {
    buttonSignIn.dispatchEvent(new MouseEvent("click", { bubbles: true }));
  });
  console.log('messageErrorTestAfter:', messageErrorTest);
});

// describe("<LoginForm />", () => {
//   test("should display a blank login form, with remember me checked by default", async () => {
//     // ???
//     const { findByTestId } = renderLoginForm();
//     const loginForm = await findByTestId("login-form");
//     screen.debug();
//     console.log('loginForm:', loginForm);
//     expect(loginForm).toHaveTextContent('Login');
//   });
// });

// function renderLoginForm() {
//     const authRepository = new AuthRepositoryImpl();
//     return render(<LoginForm authRepository={authRepository} props={null} />);
//   }
