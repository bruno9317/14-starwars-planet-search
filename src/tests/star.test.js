import React from 'react';
import { fireEvent, getByTestId, render, screen, waitFor, waitForElementToBeRemoved } from '@testing-library/react';
import App from '../App';
import FilterProvider from '../context/FilterContext';
import OrderProvider from '../context/OrderContext';
import PlanetProvider from '../context/PlanetContext';
import SearchProvider from '../context/SearchContext';
import { act } from 'react-dom/test-utils';
import mockPlanets from './mocks/mock';
import userEvent from '@testing-library/user-event';

  beforeEach(() => {
    global.fetch = jest.fn().mockResolvedValue({
      json: jest.fn().mockResolvedValue(mockPlanets)
    })
  })

  afterEach(() => {
    jest.clearAllMocks();
  });

it('testa inicio da tabela', async () => {
  await act(async () => render(
    <PlanetProvider>
      <SearchProvider>
        <FilterProvider>
          <OrderProvider>
            <App />
        </OrderProvider>
      </FilterProvider>
    </SearchProvider>
  </PlanetProvider>
  ) );
  expect(global.fetch).toHaveBeenCalled();
  const tatooine = screen.getByText('Tatooine');
  const alderaan = screen.getByText('Alderaan');
  const yavinIV = screen.getByText('Yavin IV');
  const hoth = screen.getByText('Hoth');
  const bespin = screen.getByText('Bespin');
  const endor = screen.getByText('Endor');
  const naboo = screen.getByText('Naboo');
  const coruscant = screen.getByText('Coruscant');
  const kamino = screen.getByText('Kamino');
  expect(tatooine).toBeInTheDocument;
  expect(alderaan).toBeInTheDocument;
  expect(yavinIV).toBeInTheDocument;
  expect(hoth).toBeInTheDocument;
  expect(bespin).toBeInTheDocument;
  expect(endor).toBeInTheDocument;
  expect(naboo).toBeInTheDocument;
  expect(coruscant).toBeInTheDocument;
  expect(kamino).toBeInTheDocument;
});

it('testa search filter', async () => {
  await act(async () => render(
    <PlanetProvider>
      <SearchProvider>
        <FilterProvider>
          <OrderProvider>
            <App />
        </OrderProvider>
      </FilterProvider>
    </SearchProvider>
  </PlanetProvider>
  ) );
  const searchInput = screen.getByTestId('name-filter');
  const alderaan = screen.getByText('Alderaan');
  userEvent.type(searchInput,'oo');
  expect(alderaan).not.toBeInTheDocument;
});

it('teste ordenação', async () => {
  await act(async () => render(
    <PlanetProvider>
      <SearchProvider>
        <FilterProvider>
          <OrderProvider>
            <App />
        </OrderProvider>
      </FilterProvider>
    </SearchProvider>
  </PlanetProvider>
  ) );
  const descendente = screen.getByTestId('column-sort-input-desc');
  const ascendente = screen.getByTestId('column-sort-input-asc');
  const ordenarButton = screen.getByTestId('column-sort-button');

  userEvent.selectOptions(
    screen.getByTestId('column-sort'),
    screen.getByTestId('option-orbital'),

  );
  userEvent.click(descendente);
  userEvent.click(ordenarButton);
  userEvent.click(ascendente);
  userEvent.click(ordenarButton);

  userEvent.selectOptions(
    screen.getByTestId('column-sort'),
    screen.getByTestId('option-population'),

  );
  userEvent.click(descendente);
  userEvent.click(ordenarButton);
  userEvent.click(ascendente);
  userEvent.click(ordenarButton);

  userEvent.selectOptions(
    screen.getByTestId('column-sort'),
    screen.getByTestId('option-diameter'),

  );
  userEvent.click(descendente);
  userEvent.click(ordenarButton);
  userEvent.click(ascendente);
  userEvent.click(ordenarButton);

  userEvent.selectOptions(
    screen.getByTestId('column-sort'),
    screen.getByTestId('option-rotation'),

  );
  userEvent.click(descendente);
  userEvent.click(ordenarButton);
  userEvent.click(ascendente);
  userEvent.click(ordenarButton);

  userEvent.selectOptions(
    screen.getByTestId('column-sort'),
    screen.getByTestId('option-surface'),

  );
  userEvent.click(descendente);
  userEvent.click(ordenarButton);
  userEvent.click(ascendente);
  userEvent.click(ordenarButton);

  const tatooine = screen.getByText('Tatooine');
  const alderaan = screen.getByText('Alderaan');
  const yavinIV = screen.getByText('Yavin IV');
  const hoth = screen.getByText('Hoth');
  expect(tatooine).toBeInTheDocument;
  expect(alderaan).toBeInTheDocument;
  expect(yavinIV).toBeInTheDocument;
  expect(hoth).toBeInTheDocument;

});

it('', async () => {
  await act(async () => render(
    <PlanetProvider>
      <SearchProvider>
        <FilterProvider>
          <OrderProvider>
            <App />
        </OrderProvider>
      </FilterProvider>
    </SearchProvider>
  </PlanetProvider>
  ) );
  const valorDoFiltro = screen.getByTestId('value-filter');
  const filtrarButton = screen.getByTestId('button-filter');

  userEvent.selectOptions(
    screen.getByTestId('column-filter'),
    screen.getByTestId('filter-diameter'),
  );

  userEvent.selectOptions(
    screen.getByTestId('comparison-filter'),
    screen.getByTestId('filter-maiorq'),
  );

  userEvent.type(valorDoFiltro, '9000');

  userEvent.click(filtrarButton);
  const tatooine = screen.getByText('Tatooine');
  // userEvent.click(ordenarButton);
});