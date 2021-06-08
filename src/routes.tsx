import React from 'react';

import { BrowserRouter, Switch, Route } from 'react-router-dom';
import generateKey from './utils/generate-key';

import Home from './home';

const Routes: React.FC = () => {
  const allRoutes = [
    { component: <Home />, path: '/' },
  ];
  return (
    <BrowserRouter>
      <Switch>
        {
          allRoutes.map((route) => (
            <Route
              key={generateKey(route.path)}
              path={route.path}
            >
              {route.component}
            </Route>
          ))
        }
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
