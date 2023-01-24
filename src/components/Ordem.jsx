import React, { useContext, useState } from 'react';
import { OrderContext } from '../context/OrderContext';

function Ordem() {
  const [ordem, setOrdem] = useState({ order: {
    column: 'population',
    sort: 'ASC',
  } });
  const { saveOrdem } = useContext(OrderContext);

  const handleChange = (e) => {
    if (e.target.name === 'column') {
      setOrdem({ order: { column: e.target.value, sort: ordem.order.sort } });
    } else {
      setOrdem({ order: { column: ordem.order.column, sort: e.target.value } });
    }
  };

  const handleClick = () => {
    saveOrdem(ordem);
  };
  return (
    <form>
      <label htmlFor="select11">
        Ordene:
        <select
          name="column"
          id="select11"
          value={ ordem.column }
          onChange={ handleChange }
          data-testid="column-sort"
        >
          <option value="population" data-testid="option-population">population</option>
          <option
            value="orbital_period"
            data-testid="option-orbital"
          >
            orbital_period
          </option>
          <option value="diameter" data-testid="option-diameter">diameter</option>
          <option
            value="rotation_period"
            data-testid="option-rotation"
          >
            rotation_period
          </option>
          <option
            value="surface_water"
            data-testid="option-surface"
          >
            surface_water
          </option>
        </select>
      </label>
      <label htmlFor="radio1">
        <input
          type="radio"
          id="radio1"
          name="sort"
          value="ASC"
          onChange={ handleChange }
          data-testid="column-sort-input-asc"
        />
        ascendente
      </label>
      <label htmlFor="radio2">
        <input
          type="radio"
          id="radio2"
          name="sort"
          value="DESC"
          onChange={ handleChange }
          data-testid="column-sort-input-desc"
        />
        descendente
      </label>
      <button
        type="button"
        onClick={ handleClick }
        data-testid="column-sort-button"
      >
        Ordenar
      </button>
    </form>
  );
}

export default Ordem;
