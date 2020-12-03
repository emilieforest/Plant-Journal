import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '../pages/HomePage';
import PlantIndex from '../pages/PlantIndex';
import Edit from '../pages/PlantEdit';
import Graveyard from '../pages/Graveyard';
import PlantShow from '../pages/PlantShow'
import NewPlant from '../pages/NewPlant';

import NewUser from '../pages/NewUser';
import Profile from '../pages/Profile';

export default (
  <Switch>
    <Route exact path='/' component={Home} />
    <Route exact path='/plants' component={PlantIndex} />
    <Route exact path='/plants/:id/edit' component={Edit} />
    <Route exact path='/plants/graveyard' component={Graveyard} />
    <Route exact path='/plants/new' component={NewPlant} />
    <Route  path='/plants/:id' component={PlantShow} />
    <Route path='/users' component={NewUser} />
    <Route path='/profile' component={Profile} />
  </Switch>
);