import { WishListIcon } from 'shared/ui/icons/WishlistIcon';
import { DropDownIcon } from 'shared/ui/icons/DropDownIcon';
import { SearchIcon } from 'shared/ui/icons/SearchIcon';
import { CartWithBuyIcon } from 'shared/ui/icons/CartWithBuyIcon';

export function Header() {
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
              <div className='icon-container'>
                {/* <img src={cartWithBuyIcon} /> */}
                <CartWithBuyIcon />
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
