import { createContext, useState } from 'react';
import PropTypes from 'prop-types';

export const SearchContext = createContext();

function SearchProvider({ children }) {
  const [planetSearch, setPlanetSearch] = useState('');

  const savePlanetName = (planetName) => {
    setPlanetSearch(planetName);
  };

  return (
    <SearchContext.Provider value={ { savePlanetName, planetSearch } }>
      { children }
    </SearchContext.Provider>
  );
}

SearchProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default SearchProvider;
