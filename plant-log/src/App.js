import React from 'react';
import './App.css';
// Components
import Nav from './components/Nav';
import routes from './config/routes';


class App extends React.Component {
  render() {
    return (
      <div className="app">
        <Nav />
        { routes }
      </div>
    );
  }
}

export default App;
