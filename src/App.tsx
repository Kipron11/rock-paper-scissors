import React from 'react';
import './App.scss';
import Header from './components/Header/Header';
import GameForm from './components/GameForm/GameForm';

const App = () => (
  <section className="App">
    <Header />
    <GameForm />
  </section>
);

export default App;
