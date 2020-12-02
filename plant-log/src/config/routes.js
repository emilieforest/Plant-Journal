import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '../pages/HomePage';
import PlantIndex from '../pages/PlantIndex';
import PlantShow from '../pages/PlantShow';
// import Graveyard from '../pages/Graveyard';

export default (
  <Switch>
    <Route exact path='/' component={Home} />
    <Route path='/plants' component={PlantIndex} />
    <Route path='/plants/:id' component={PlantShow} />
  </Switch>
)