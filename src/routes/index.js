import React from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';

import { Home, Health } from '../views';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path='/' component={Home} />
      <Route path='/test' component={Health} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
