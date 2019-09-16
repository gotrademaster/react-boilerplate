import { init } from '@rematch/core';
import { createLogicMiddleware } from 'redux-logic';
import rematchLogicPlugin from 'rematch-logic';
import feathersModels from './feathers.config';
import models from '../models';

const logicMiddleware = createLogicMiddleware([], {});

const store = init({
  models: {
    ...feathersModels,
    ...models,
  },
  plugins: [rematchLogicPlugin(logicMiddleware)],
  redux: {
    middlewares: [logicMiddleware],
  },
});

if (process.env.NODE_ENV === 'development') {
  window.store = store;
}

export default store;
