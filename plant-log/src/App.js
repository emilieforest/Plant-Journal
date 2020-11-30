import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
//Pages
import HomePage from './pages/HomePage';
import PlantIndex from './pages/PlantIndex';
// Components
import LoginButton from './components/LoginButton';
import Nav from './components/Nav';


class App extends React.Component {
  render() {
    return (
      <div className="container">
        <LoginButton />
        <Nav />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/plants' component={PlantIndex} />
        </Switch>
      </div>
    );
  }
}

export default App;
