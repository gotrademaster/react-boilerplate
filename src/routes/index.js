import React from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';

import { Home, Health } from '../views';

const routes = [
  {
    path: '/',
    component: Home,
    exact: true,
  },
  {
    path: '/health',
    component: Health,
    exact: true,
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
          // eslint-disable-next-line react/jsx-props-no-spreading
          {...route}
        />
      ))}
    </Switch>
  </BrowserRouter>
);

export default Routes;
