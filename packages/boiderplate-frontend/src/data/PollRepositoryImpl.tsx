import PollRepository from "../domain/repository/PollRepository";
import BaseRepository from './BaseRepository';


export default class PollRepositoryImpl extends BaseRepository implements PollRepository {
    constructor() {
        super();
        this.PATH = "/api/v1/polls";
    }

    async getListPoll() {
        return await super.get(this.PATH, { offset: 0, limit: 100 });
    }

    async login(email: string, password: string) {
        return await super.post(this.PATH + '/auth/signin', { email, password });
    }
}
