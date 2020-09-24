import { ContainerModule, interfaces } from 'inversify';
// import { RecoilValue } from 'recoil/dist';
import { applyDependencies } from '../helpers/applyDependencies';
import { DataModuleSymbols } from '../../data/DataModuleSymbols';
import { DomainModuleSymbols } from '../../domain/DomainModuleSymbols';
import PollRepositoryImpl from '../../data/PollRepositoryImpl';
import GetListPollUseCase from '../../domain/usecase/poll/GetListPollUseCase';



const initializeUserModule = (bind: interfaces.Bind) => {
    bind<GetListPollUseCase>(DomainModuleSymbols.GET_LIST_POLL_USE_CASE).toConstantValue(
      applyDependencies(PollRepositoryImpl, [
        DataModuleSymbols.POLL_REPOSITORY,
      ])
    );
  };
export const PollModule = new ContainerModule(initializeUserModule);
