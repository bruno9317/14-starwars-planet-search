import { createContext, useState } from 'react';
import PropTypes from 'prop-types';

export const OrderContext = createContext();

function OrderProvider({ children }) {
  const [ordem, setOrdem] = useState();

  const saveOrdem = (ordem1) => {
    setOrdem(ordem1);
  };

  return (
    <OrderContext.Provider value={ { saveOrdem, ordem } }>
      { children }
    </OrderContext.Provider>
  );
}

OrderProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default OrderProvider;
