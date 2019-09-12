import feathers from '@feathersjs/feathers';
import rest from '@feathersjs/rest-client';
import axios from 'axios';
import { init } from 'feathers-rematch';
import services from './services.config';

const endpoint = 'http://localhost:3030';

const restClient = feathers()
  .configure(rest(endpoint).axios(axios));

const { models } = init({
  transport: 'rest',
  restClient,
  services,
});

export default models;
