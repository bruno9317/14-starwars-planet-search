import { createContext, useState } from 'react';
import PropTypes from 'prop-types';

export const PlanetContext = createContext();

function PlanetProvider({ children }) {
  const [planets, setPlanets] = useState(null);
  //   const [isLoading, setIsLoading] = useState(false);

  const fetchData = async () => {
    const response = await fetch('https://swapi.dev/api/planets');
    const data = await response.json();
    const filter = data.results.map((p) => {
      const planetas = p;
      delete planetas.residents;
      return planetas;
    });
    setPlanets(filter);
  };
  fetchData();

  return (
    <PlanetContext.Provider value={ { planets } }>
      { children }
    </PlanetContext.Provider>
  );
}

PlanetProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PlanetProvider;
