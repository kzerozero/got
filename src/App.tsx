import React from 'react';
import './App.css';
import { AppRoutes } from './AppRoutes';
import Navigation from './components/header/Navigation';

const App = () => {
  return (
    <div className="App">
      <Navigation />
      <AppRoutes />
    </div>
  );
}

export default App;
