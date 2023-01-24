
import React from 'react';
import { Weather } from './components/weather/weather';
import { Clock } from './components/weather/clock';
import { Scene } from './components/weather/background-scene/backgroundScene';
import './index.css'


export const App = () => {
  return (
    <div className="App">
      <Weather />
      <Clock />
      <Scene />
    </div>
  );
}

