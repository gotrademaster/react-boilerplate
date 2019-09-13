import React from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';

import { Home, Health } from '../views';

const routes = [
  {
    path: '/',
    component: Home,
  },
  {
    path: '/health',
    component: Health,
  },
];

const Routes = () => (
  <BrowserRouter>
    <Switch>
      {routes.map((route) => (
        <Route
          key={route.path}
          path={route.path}
          component={route.component}
        />
      ))}
    </Switch>
  </BrowserRouter>
);

export default Routes;
