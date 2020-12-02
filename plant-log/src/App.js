import React from 'react';
import './App.css';
// Components
import routes from './config/routes';
import Nav from './components/Nav';


class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Nav />
        { routes }
      </div>
    );
  }
}

export default App;
