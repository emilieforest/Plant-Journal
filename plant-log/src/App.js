import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
//Pages
import HomePage from './pages/HomePage';
import PlantIndex from './pages/PlantIndex';
import PlantShow from './pages/PlantShow';
// Components
import Nav from './components/Nav';
// import LoginButton from './components/LoginButton';


class App extends React.Component {
  render() {
    return (
      <div className="app">
        <Nav />
        {/* <LoginButton /> */}
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/plants/:id' component={PlantShow} />
          <Route path='/plants' component={PlantIndex} />
        </Switch>
      </div>
    );
  }
}

export default App;
