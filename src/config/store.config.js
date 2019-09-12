import { init } from '@rematch/core';
import feathersModels from './feathers.config';
import models from '../models';

const store = init({
  models: {
    ...feathersModels,
    ...models,
  },
});

if (process.env.NODE_ENV === 'development') {
  window.store = store;
}

export default store;
