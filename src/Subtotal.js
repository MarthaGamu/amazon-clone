import React from 'react';
import './Subtotal.css';
import CurrecyFormat from 'react-currency-format';
import { ShoppingBasket } from '@material-ui/icons';
import { useStateValue } from './StateProvider';
import { getBasketTotal } from './Reducer';

function Subtotal() {
  const [{ basket }, dispatch] = useStateValue();
  return (
    <div className="subtotal">
      <CurrecyFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal ({basket.length} items)<strong>{value}</strong>
            </p>
            <small className="subtotalGift">
              <input type="checkbox" />
              This order contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={getBasketTotal(basket)}
        displayType={'text'}
        thousandSeparator={true}
        prefix={'$'}
      />
      <button>Proceed to Checkout</button>
    </div>
  );
}

export default Subtotal;
