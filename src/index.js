import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import FilterProvider from './context/FilterContext';
import OrderProvider from './context/OrderContext';
import PlanetProvider from './context/PlanetContext';
import SearchProvider from './context/SearchContext';

ReactDOM
  .createRoot(document.getElementById('root'))
  .render(
    <PlanetProvider>
      <SearchProvider>
        <FilterProvider>
          <OrderProvider>
            <App />
          </OrderProvider>
        </FilterProvider>
      </SearchProvider>
    </PlanetProvider>,
  );
