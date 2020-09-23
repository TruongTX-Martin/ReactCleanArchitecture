
import AuthRepository from '../../repository/login/AuthRepository';
import AuthHolder from '../../entity/login/models/AuthHolder';
export default class LoginUseCase {
    private authRepository: AuthRepository;

    private authHolder: AuthHolder;


    public constructor(authRepository: AuthRepository, authHolder: AuthHolder) {
        this.authRepository = authRepository;
        this.authHolder = authHolder;
    }
}
