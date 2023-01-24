import React, { useContext, useEffect, useState } from 'react';
import { FilterContext } from '../context/FilterContext';
import { OrderContext } from '../context/OrderContext';
import { PlanetContext } from '../context/PlanetContext';
import { SearchContext } from '../context/SearchContext';
import useOrdena from '../hooks/useOrdena';

function Table() {
  const {
    ordenaPopulationASC,
    ordenaPopulationDESC,
    ordenaOrbitalASC,
    ordenaOrbitalDESC,
    ordenaRotationASC,
    ordenaRotationDESC,
    ordenaDiameterASC,
    ordenaDiameterDESC,
    ordenaSurfaceASC,
    ordenaSurfaceDESC,
  } = useOrdena();
  const { planets } = useContext(PlanetContext);
  const { planetSearch } = useContext(SearchContext);
  const { filter } = useContext(FilterContext);
  const { ordem } = useContext(OrderContext);
  const [planetas, setPlanetas] = useState(planets);

  useEffect(() => {
    const receba = planets.filter((p) => p.name.toLowerCase().includes(planetSearch));
    setPlanetas(receba);
  }, [planetSearch]);

  const filtraPopulation = (comparison, value) => {
    if (comparison === 'igual a') {
      const lista = planetas.filter((p) => parseInt(p.population, 10) === value);
      setPlanetas(lista);
      console.log(lista);
    } else if (comparison === 'menor que') {
      const lista = planetas.filter((p) => p.population < value);
      setPlanetas(lista);
    } else if (comparison === 'maior que') {
      const lista = planetas.filter((p) => p.population > value);
      setPlanetas(lista);
    }
  };

  const filtraOrbital = (comparison, value) => {
    if (comparison === 'igual a') {
      const lista = planetas.filter((p) => p.orbital_period === value);
      setPlanetas(lista);
    } else if (comparison === 'menor que') {
      const lista = planetas.filter((p) => p.orbital_period < value);
      setPlanetas(lista);
    } else if (comparison === 'maior que') {
      const lista = planetas.filter((p) => p.orbital_period > value);
      setPlanetas(lista);
    }
  };

  const filtraRotation = (comparison, value) => {
    if (comparison === 'igual a') {
      const lista = planetas.filter((p) => parseInt(p.rotation_period, 10) === value);
      setPlanetas(lista);
    } else if (comparison === 'menor que') {
      const lista = planetas.filter((p) => p.rotation_period < value);
      setPlanetas(lista);
    } else if (comparison === 'maior que') {
      const lista = planetas.filter((p) => p.rotation_period > value);
      setPlanetas(lista);
    }
  };

  const filtraDiameter = (comparison, value) => {
    if (comparison === 'igual a') {
      const lista = planetas.filter((p) => p.diameter === value);
      setPlanetas(lista);
    } else if (comparison === 'menor que') {
      const lista = planetas.filter((p) => p.diameter < value);
      setPlanetas(lista);
    } else if (comparison === 'maior que') {
      const lista = planetas.filter((p) => p.diameter > value);
      setPlanetas(lista);
    }
  };

  const filtraSurface = (comparison, value) => {
    if (comparison === 'igual a') {
      const lista = planetas.filter((p) => p.surface_water === value);
      setPlanetas(lista);
    } else if (comparison === 'menor que') {
      const lista = planetas.filter((p) => p.surface_water < value);
      setPlanetas(lista);
    } else if (comparison === 'maior que') {
      const lista = planetas.filter((p) => p.surface_water > value);
      setPlanetas(lista);
    }
  };

  useEffect(() => {
    if (filter.length > 0) {
      const { column, comparison, value } = filter[filter.length - 1];
      if (column === 'population') {
        filtraPopulation(comparison, parseInt(value, 10));
      } else if (column === 'orbital_period') {
        filtraOrbital(comparison, parseInt(value, 10));
      } else if (column === 'rotation_period') {
        filtraRotation(comparison, parseInt(value, 10));
      } else if (column === 'diameter') {
        filtraDiameter(comparison, parseInt(value, 10));
      } else if (column === 'surface_water') {
        filtraSurface(comparison, parseInt(value, 10));
      }
    }
  }, [filter]);

  useEffect(() => {
    if (ordem !== undefined) {
      const { order } = ordem;
      const { column, sort } = order;
      if (column === 'surface_water') {
        if (sort === 'ASC') {
          setPlanetas(ordenaSurfaceASC());
        } else {
          setPlanetas(ordenaSurfaceDESC());
        }
      }
    }
  }, [ordem]);

  useEffect(() => {
    if (ordem !== undefined) {
      const { order } = ordem;
      const { column, sort } = order;
      if (column === 'rotation_period') {
        if (sort === 'ASC') {
          setPlanetas(ordenaRotationASC());
        } else {
          setPlanetas(ordenaRotationDESC());
        }
      } else if (column === 'diameter') {
        if (sort === 'ASC') {
          setPlanetas(ordenaDiameterASC());
        } else {
          setPlanetas(ordenaDiameterDESC());
        }
      }
    }
  }, [ordem]);

  useEffect(() => {
    if (ordem !== undefined) {
      const { order } = ordem;
      const { column, sort } = order;
      if (column === 'population') {
        if (sort === 'ASC') {
          setPlanetas(ordenaPopulationASC());
        } else {
          setPlanetas(ordenaPopulationDESC());
        }
      } else if (column === 'orbital_period') {
        if (sort === 'ASC') {
          setPlanetas(ordenaOrbitalASC());
        } else {
          setPlanetas(ordenaOrbitalDESC());
        }
      }
    }
  }, [ordem]);

  return (
    <table>
      <thead>
        <tr>
          <th scope="col">Name</th>
          <th scope="col">Rotation Period</th>
          <th scope="col">Orbital Period</th>
          <th scope="col">Diameter</th>
          <th scope="col">Climate</th>
          <th scope="col">Gravity</th>
          <th scope="col">Terrain</th>
          <th scope="col">Surface Water</th>
          <th scope="col">Population</th>
          <th scope="col">Films</th>
          <th scope="col">Created</th>
          <th scope="col">Edited</th>
          <th scope="col">URL</th>
        </tr>
      </thead>
      <tbody>
        { planetas.map((p) => (
          <tr key={ p.name }>
            <td data-testid="planet-name">{p.name}</td>
            <td>{p.rotation_period}</td>
            <td>{p.orbital_period}</td>
            <td>{p.diameter}</td>
            <td>{p.climate}</td>
            <td>{p.gravity}</td>
            <td>{p.terrain}</td>
            <td>{p.surface_water}</td>
            <td>{p.population}</td>
            <td>{p.films}</td>
            <td>{p.created}</td>
            <td>{p.edited}</td>
            <td>{p.url}</td>
          </tr>)) }
      </tbody>
    </table>
  );
}

export default Table;
