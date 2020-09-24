import ListPollViewModel from './ListPollViewModel';
import BaseView from '../base/BaseView';
import GetListPollUseCase from '../../../domain/usecase/poll/GetListPollUseCase';

export default class ListPollViewModelImpl implements ListPollViewModel {
    private baseView?: BaseView;

    private getListPollUseCase: GetListPollUseCase;


    constructor(getListPollUseCase: GetListPollUseCase) {
        this.getListPollUseCase = getListPollUseCase;
    }

    async getListPoll() {
        console.log('Get list poll');
        const listPoll = await this.getListPollUseCase.getListPoll();
        console.log('listPoll:', listPoll);
    }

    notifyViewAboutChanges(): void {
        if (this.baseView) {
            this.baseView.onViewModelChanged();
          }
    }

    attachView(baseView: BaseView): void {
        this.baseView = baseView;
    }

    detachView(): void {
        this.baseView = undefined;
    }
}
