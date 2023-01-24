import { createContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';

export const PlanetContext = createContext();

function PlanetProvider({ children }) {
  const [planets, setPlanets] = useState(null);
  //   const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('https://swapi.dev/api/planets');
      console.log('oi');
      const data = await response.json();
      const filter = data.results.map((p) => {
        const planetas = p;
        delete planetas.residents;
        return planetas;
      });
      setPlanets(filter);
      console.log('oi');
    };
    fetchData();
  }, []);

  return (
    <PlanetContext.Provider value={ { planets, setPlanets } }>
      { children }
    </PlanetContext.Provider>
  );
}

PlanetProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PlanetProvider;
