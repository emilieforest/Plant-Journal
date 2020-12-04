import { useAuth0 } from '@auth0/auth0-react';
import React from 'react';
import './App.css';
// Components
import Nav from './components/Nav';
import routes from './config/routes';


const App = () => {
  const {isLoading} = useAuth0();
  if (isLoading) {
    return <div>Loading...</div>
  }
  return (
    <div className="app">
      <Nav />
      { routes }
    </div>
  );
}


export default App;
