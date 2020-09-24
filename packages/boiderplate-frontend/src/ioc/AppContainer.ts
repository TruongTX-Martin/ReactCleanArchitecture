import { Container } from 'inversify';

import { PollModule } from './Poll/PollModule';

const appContainer = new Container({
  defaultScope: 'Singleton',
  skipBaseClassChecks: true,
});

const initializeContainer = () => {
  appContainer.load(PollModule);
};

initializeContainer();

export { appContainer, initializeContainer };
