
import PollRepository from '../../repository/PollRepository';
export default class GetListPollUseCase {
    private pollRepository: PollRepository;

    public constructor(pollRepository: PollRepository) {
        this.pollRepository = pollRepository;
    }

    public async getListPoll() : Promise<void> {
        return await this.pollRepository.getListPoll();
    }
}
