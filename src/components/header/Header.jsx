import { useState } from 'react';
import { useSelector } from 'react-redux';

import { getCartItemsCount } from 'shared/store/slices/cartSlice';

import { WishListIcon } from 'shared/ui/icons/WishlistIcon';
import { DropDownIcon } from 'shared/ui/icons/DropDownIcon';
import { SearchIcon } from 'shared/ui/icons/SearchIcon';
import { CartWithBuyIcon } from 'shared/ui/icons/CartWithBuyIcon';
import { CartDropDown } from 'components/cart-dropdown';

export function Header() {
  const [openCartDropdown, setOpenCartDropdown] = useState(false);

  const cartItemCount = useSelector(getCartItemsCount);

  const handleCartDropdown = () => {
    setOpenCartDropdown((openToggle) => !openToggle);
  };

  return (
    <header className='header'>
      {/* <!-- top header --> */}
      <div className='header-top'>
        <div className='container'>
          <div></div>
          <div className='header-info'>
            <div className='header-info-sales'>
              <p>Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!</p>
              <a style={{ marginLeft: '8px', textDecoration: 'underline' }}>ShopNow</a>
            </div>
          </div>
          <div className='header-right'>
            <p>English</p>
            {/* <img src={dropdownIcon} /> */}
            <DropDownIcon />
          </div>
        </div>
      </div>
      {/* <!-- Nav bar --> */}
      <nav>
        <div className='container'>
          <div className='nav-logo'>
            <h2>Eclusive</h2>
          </div>
          <div className='nav-menu'>
            <a className='active'>Home</a>
            <a>Contact</a>
            <a>About</a>
            <a>Sign Up</a>
          </div>
          <div className='nav-right'>
            <div className='nav-input'>
              <input className='textbox' placeholder='What are you looking for?' />
              {/* <img className="search-icon" src={searchIcon} /> */}
              <SearchIcon className='search-icon' />
            </div>
            <div className='nav-right-actions'>
              <div className='icon-container'>
                {/* <img src={wishListIcon} /> */}
                <WishListIcon />
              </div>
              <div onClick={handleCartDropdown} className='icon-container'>
                {/* <img src={cartWithBuyIcon} /> */}

                <CartWithBuyIcon />
                {cartItemCount ? <div className='wishlist-items-count'>{cartItemCount}</div> : null}
                {openCartDropdown ? <CartDropDown /> : null}
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
