import { useContext } from 'react';
import { PlanetContext } from '../context/PlanetContext';

export default function useOrdena() {
  const { planets } = useContext(PlanetContext);

  const ordenaPopulationASC = () => {
    const magic = -1;
    const lista = planets.sort((a, b) => {
      if (a.population === 'unknown') {
        return 1;
      }
      if (b.population === 'unknown') {
        return magic;
      }
      if (a.population - b.population > 0) {
        return 1;
      }
      if (b.population - a.population > 0) {
        return magic;
      }
      return 0;
    });
    return lista;
  };

  const ordenaPopulationDESC = () => {
    const magic = -1;
    const lista = planets.sort((a, b) => {
      if (a.population === 'unknown') {
        return 1;
      }
      if (b.population === 'unknown') {
        return magic;
      }
      if (a.population - b.population < 0) {
        return 1;
      }
      if (b.population - a.population < 0) {
        return magic;
      }
      return 0;
    });
    return lista;
  };

  const ordenaOrbitalASC = () => {
    const magic = -1;
    const lista = planets.sort((a, b) => {
      if (a.orbital_period - b.orbital_period > 0) {
        return 1;
      }
      return magic;
    });
    return lista;
  };

  const ordenaOrbitalDESC = () => {
    const magic = -1;
    const lista = planets.sort((a, b) => {
      if (a.orbital_period - b.orbital_period < 0) {
        return 1;
      }
      return magic;
    });
    return lista;
  };

  const ordenaRotationASC = () => {
    const magic = -1;
    const lista = planets.sort((a, b) => {
      if (a.rotation_period - b.rotation_period > 0) {
        console.log('a');
        return 1;
      }
      return magic;
    });
    return lista;
  };

  const ordenaRotationDESC = () => {
    const magic = -1;
    const lista = planets.sort((a, b) => {
      if (a.rotation_period - b.rotation_period < 0) {
        return 1;
      }
      return magic;
    });
    return lista;
  };

  const ordenaDiameterASC = () => {
    const magic = -1;
    const lista = planets.sort((a, b) => {
      if (a.diameter - b.diameter > 0) {
        return 1;
      }
      return magic;
    });
    return lista;
  };

  const ordenaDiameterDESC = () => {
    const magic = -1;
    const lista = planets.sort((a, b) => {
      if (a.diameter - b.diameter < 0) {
        return 1;
      }
      return magic;
    });
    return lista;
  };

  const ordenaSurfaceASC = () => {
    const magic = -1;
    const lista = planets.sort((a, b) => {
      if (a.surface_water === 'unknown') {
        return 1;
      }
      if (b.surface_water === 'unknown') {
        return magic;
      }
      if (a.surface_water - b.surface_water > 0) {
        return 1;
      }
      if (b.surface_water - a.surface_water > 0) {
        return magic;
      }
      return 0;
    });
    return lista;
  };

  const ordenaSurfaceDESC = () => {
    const magic = -1;
    const lista = planets.sort((a, b) => {
      if (a.surface_water === 'unknown') {
        return 1;
      }
      if (b.surface_water === 'unknown') {
        return magic;
      }
      if (a.surface_water - b.surface_water < 0) {
        return 1;
      }
      if (b.surface_water - a.surface_water < 0) {
        return magic;
      }
      return 0;
    });
    return lista;
  };

  return {
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
  };
}
