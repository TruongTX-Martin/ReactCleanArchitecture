import BaseViewModel from '../base/BaseViewModel';

export default interface LoginViewModel extends BaseViewModel {

    email: string;
    password: string;
    emailError: string;
    passwordError: string;
    loading: boolean;

    onEmailChanged(email: string): void;
    onPasswordChanged(password: string): void;
    onClickSignIn(): void;
    
}
