import LoginViewModel from './LoginViewModel';
import BaseView from '../base/BaseView';
import LoginUseCase from '../../../domain/usecase/auth/LoginUseCase';
import FormValidator from '../../utils/FormValidator';

export default class LoginViewModelImpl implements LoginViewModel {
    private loginUseCase: LoginUseCase;

    private baseView?: BaseView;

     email: string;

     password: string;

     emailError: string;

     passwordError: string;

     loading: boolean;

    public constructor(loginUseCase: LoginUseCase) {
        this.loginUseCase = loginUseCase;
    }

    public onEmailChanged = (email: string):void => {
        this.email= email;
        this.emailError ='';
        this.notifyViewAboutChanges();
    }

    public onPasswordChanged = (password: string) : void => {
        this.password = password;
        this.passwordError = '';
        this.notifyViewAboutChanges();
    }

    public async onClickSignIn () {
        if (!this.validateFormLogin()) {
            this.notifyViewAboutChanges();
            return;
        }
        try {
          this.loading = true;
          this.notifyViewAboutChanges();
          const loginResult = await this.loginUseCase.loginUser(this.email, this.password);   
          if (loginResult.status == 'error') {
            this.passwordError = loginResult.message;
          }   
          this.loading = false;
          this.notifyViewAboutChanges();
        } catch (error) {
            console.log('LoginViewModelImpl onClickSignIn:', error);
        }
    }

    private validateFormLogin = () : boolean =>  {
        if (!this.email) {
            this.emailError = 'Email cannot be empty';
            return false;
        }
        if (!FormValidator.isValidEmail(this.email)) {
            this.emailError = 'Email format is not valid';
            return;
        }
        if (!this.password) {
            this.passwordError = 'Password cannot be empty';
            return false;
        }
        return true;
    }

    private notifyViewAboutChanges = (): void => {
        if (this.baseView) {
          this.baseView.onViewModelChanged();
        }
      };

    attachView(baseView: BaseView): void {
        this.baseView = baseView;
    }

    detachView(): void {
        this.baseView = undefined;
    }
}
