import BaseView from './BaseView';

export default interface BaseViewModel {
    attachView(baseView: BaseView): void;
    detachView(): void;
    notifyViewAboutChanges(): void;
}