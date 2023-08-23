import React from 'react';
import Home from './pages/Home';
import SolarSystem from './components/Solarsystem';

class App extends React.Component {
  render() {
    return (
      <div>
        <Home />
        <SolarSystem />
      </div>
    );
  }
}

export default App;
