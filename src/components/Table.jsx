import React, { useContext, useEffect } from 'react';
// import { useEffect } from 'react';
import { PlanetContext } from '../context/PlanetContext';

function Table() {
  const { planets } = useContext(PlanetContext);

  useEffect(() => {
    console.log(planets);
    const names = planets.map((p) => p.name);
    // const names = Object.values(planets);
    console.log(names);
  }, []);

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
        { planets.map((p) => (
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
