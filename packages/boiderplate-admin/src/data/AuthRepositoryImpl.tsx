import AuthRepository from "../domain/repository/AuthRepository";
import BaseRepository from './BaseRepository';


export default class AuthFakeApi extends BaseRepository implements AuthRepository {
    constructor() {
        super();
        this.PATH = '/api/admin/v1';
    }

    async login(email: string, password: string) {
        return await super.post(this.PATH + '/auth/signin', { email, password });
    }
}
