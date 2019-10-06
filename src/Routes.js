import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import { MapView } from './views';

const Routes = () => {
  return (
    <Switch>
      <Route path="/" component={MapView} />
      <Redirect from="/" to="/" />
    </Switch>
  );
};

export default Routes;
