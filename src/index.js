import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import PlanetProvider from './context/PlanetContext';
import SearchProvider from './context/SearchContext';

ReactDOM
  .createRoot(document.getElementById('root'))
  .render(
    <PlanetProvider>
      <SearchProvider>
        <App />
      </SearchProvider>
    </PlanetProvider>,
  );
