import React from 'react';
import './CheckoutProduct.css';
import StarIcon from '@material-ui/icons/Star';
import { useStateValue } from './StateProvider';

function CheckoutProduct({ id, image, title, price, rating }) {
  const [{ basket }, dispatch] = useStateValue();

  const removeFromBasket = () => {
    //remove the item from basket
    dispatch({
      type: 'REMOVE_FROM_BASKET',
      id: id,
    });
  };
  return (
    <div className="checkoutProduct">
      <img className="productImage" src={image} />

      <div className="checkoutProductInfo">
        <p className="checkoutProductTitle">{title}</p>
        <p className="checkoutProductPrice">
          <small>$</small>
          <strong>{price}</strong>{' '}
        </p>
        <div className="checkoutProductRating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <StarIcon className="icon" />
            ))}
        </div>
        <button onClick={removeFromBasket}>Remove from Basket</button>
      </div>
    </div>
  );
}

export default CheckoutProduct;
