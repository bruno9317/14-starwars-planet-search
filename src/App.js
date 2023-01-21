import React, { useContext } from 'react';
import './App.css';
import Table from './components/Table';
import { PlanetContext } from './context/PlanetContext';

function App() {
  const { planets } = useContext(PlanetContext);
  return (
    <div>
      <span>Hello, App!</span>
      { planets !== null ? <Table /> : 'Carregando'}
    </div>
  );
}

export default App;
