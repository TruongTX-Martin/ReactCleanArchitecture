import AuthRepository from "../domain/repository/login/AuthRepository";


export default class AuthFakeApi implements AuthRepository {
    login(email: string, password: string): void {
        console.log(email, password);
        throw new Error("Method not implemented.");
    }
}
