import { createContext, useState } from 'react';
import PropTypes from 'prop-types';

export const FilterContext = createContext();

function FilterProvider({ children }) {
  const [filter, setFilter] = useState([]);

  const saveFiltro = (filtro1) => {
    setFilter([...filter, filtro1]);
  };

  return (
    <FilterContext.Provider value={ { saveFiltro, filter } }>
      { children }
    </FilterContext.Provider>
  );
}

FilterProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default FilterProvider;
