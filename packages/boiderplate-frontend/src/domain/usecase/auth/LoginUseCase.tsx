
import AuthRepository from '../../repository/AuthRepository';
export default class LoginUseCase {
    private authRepository: AuthRepository;



    public constructor(authRepository: AuthRepository) {
        this.authRepository = authRepository;
    }

    public async loginUser(email: string, password: string) : Promise<void> {
        return await this.authRepository.login(email, password);
    }
}
