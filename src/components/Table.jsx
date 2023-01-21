import React, { useContext, useEffect, useState } from 'react';
// import { useEffect } from 'react';
import { PlanetContext } from '../context/PlanetContext';
import { SearchContext } from '../context/SearchContext';

function Table() {
  const { planets } = useContext(PlanetContext);
  const { planetSearch } = useContext(SearchContext);

  const [planetas, setPlanetas] = useState(planets);

  useEffect(() => {
    if (planetSearch !== '') {
      const receba = planetas.filter((p) => p.name.includes(planetSearch));
      console.log(planetSearch);
      console.log(receba);
      setPlanetas(receba);
    } else {
      setPlanetas(planets);
    }
  }, [planetSearch]);

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
            <td>{p.name}</td>
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
