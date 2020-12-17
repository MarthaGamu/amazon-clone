import React from 'react';
import './Header.css';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import { Link } from 'react-router-dom';
import { useStateValue } from './StateProvider';
import { auth } from './firebase';
function Header() {
  const [{ basket, user }, dispatch] = useStateValue();

  const handleAuthentication = () => {
    if (user) {
      auth.signOut();
    }
  };
  return (
    <div className="header">
      <Link to="/">
        <img
          className="headerLogo"
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
        />
      </Link>
      <div className="headerSearch">
        <input className="headerSearchInput" type="text" />
        <SearchIcon className="searchIcon" />
      </div>
      <div className="headerNav">
        <Link to={!user && '/login'}>
          <div onClick={handleAuthentication}>
            <div className="headerOption">
              <span className="headerOptionLineOne">
                {user?.email ?? 'Hello guest'}
              </span>
              <span className="headerOptionLineTwo">
                {user ? 'Sign Out' : 'Sign In'}
              </span>
            </div>
          </div>
        </Link>
        <div className="headerOption">
          <span className="headerOptionLineOne">Returns</span>
          <span className="headerOptionLineTwo">&Orders</span>
        </div>
        <div className="headerOption">
          <span className="headerOptionLineOne">Your</span>
          <span className="headerOptionLineTwo">Prime</span>
        </div>
        <Link to="/checkout">
          <div className="headerOptionBasket">
            <ShoppingBasketIcon />
            <span className="headerOptionLineTwo headerBasketCount">
              {basket.length}
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;
