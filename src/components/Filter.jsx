import React, { useContext, useEffect, useState } from 'react';
import { FilterContext } from '../context/FilterContext';

function Filter() {
  const [filtro, setFiltro] = useState({
    column: 'population',
    comparison: 'maior que',
    value: '0' });
  const { saveFiltro } = useContext(FilterContext);
  const [selects2, setSelects2] = useState([]);

  useEffect(() => {
    const selects = ['population',
      'orbital_period', 'diameter', 'rotation_period', 'surface_water'];
    setSelects2(selects);
  }, []);

  const handleChange = (e) => {
    setFiltro({
      ...filtro,
      [e.target.name]: e.target.value,
    });
  };

  const handleClick = () => {
    const novosSelects = selects2.filter((p) => p !== filtro.column);
    setSelects2(novosSelects);
    saveFiltro(filtro);
    setFiltro({
      ...filtro,
      column: selects2[1],
    });
  };

  return (
    <form>
      <label htmlFor="select1">
        Column:
        <select
          name="column"
          id="select1"
          value={ filtro.column }
          onChange={ handleChange }
          data-testid="column-filter"
        >
          { selects2.map((p) => (
            <option
              value={ p }
              key={ p }
              data-testid={ `filter-${p}` }
            >
              { p }
            </option>))}
        </select>
      </label>
      <label htmlFor="select2">
        Comparison:
        <select
          name="comparison"
          id="select2"
          value={ filtro.comparison }
          onChange={ handleChange }
          data-testid="comparison-filter"
        >
          <option value="maior que" data-testid="filter-maiorq">maior que</option>
          <option value="menor que" data-testid="filter-menorq">menor que</option>
          <option value="igual a" data-testid="filter-iguala">igual a</option>
        </select>
      </label>
      <label htmlFor="value">
        Valor:
        <input
          name="value"
          id="value"
          type="number"
          value={ filtro.value }
          onChange={ handleChange }
          data-testid="value-filter"
        />
      </label>
      <button
        type="button"
        onClick={ handleClick }
        data-testid="button-filter"
      >
        Filtrar
      </button>
    </form>
  );
}

export default Filter;
