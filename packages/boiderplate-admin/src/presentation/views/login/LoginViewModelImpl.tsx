import LoginViewModel from './LoginViewModel';
import BaseView from '../base/BaseView';
import LoginUseCase from '../../../domain/interactors/login/LoginUseCase';
import AuthHolder from '../../../domain/entity/login/models/AuthHolder';
import AuthListener from '../../../domain/entity/login/models/AuthListener';
// import FormValidator from '../../utils/FormValidator';

export default class LoginViewModelImpl implements LoginViewModel, AuthListener {
    private loginUseCase: LoginUseCase;

    private baseView?: BaseView;

    private authHolder: AuthHolder;

    public constructor(loginUseCase: LoginUseCase, authHolder: AuthHolder) {
        this.loginUseCase = loginUseCase;
        this.authHolder = authHolder;
        this.authHolder = authHolder;
    }

    onAuthChanged(): void {
        throw new Error('Method not implemented.');
    }

    attachView(baseView: BaseView): void {
        this.baseView = baseView;
    }

    detachView(): void {
        this.baseView = undefined;
    }
}
