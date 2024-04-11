// icons
import { WishListIcon } from 'shared/ui/icons/WishlistIcon';
import { SearchIcon } from 'shared/ui/icons/SearchIcon';
import { DropDownIcon } from 'shared/ui/icons/DropDownIcon';
import { CartWithBuyIcon } from 'shared/ui/icons/CartWithBuyIcon';
import { BannerIcon } from 'shared/ui/icons/BannerIcon.jsx';
import { CartIcon } from 'shared/ui/icons/CartIcon.jsx';
import { DropDownRightIcon } from 'shared/ui/icons/DropDownRightIcon.jsx';
import { HeartSmallIcon } from 'shared/ui/icons/HeartSmallIcon.jsx';
import { IconDeleteIcon } from 'shared/ui/icons/IconDeleteIcon.jsx';
import { IconGoogleIcon } from 'shared/ui/icons/IconGoogleIcon.jsx';
import { IconLogoutIcon } from 'shared/ui/icons/IconLogoutIcon.jsx';
import { IconMallbagIcon } from 'shared/ui/icons/IconMallbagIcon.jsx';
import { IconsArrowLeftIcon } from 'shared/ui/icons/IconsArrowLeftIcon.jsx';
import { IconsArrowRightIcon } from 'shared/ui/icons/IconsArrowRightIcon.jsx';
import { IconSendIcon } from 'shared/ui/icons/IconSendIcon.jsx';
import { LaptopIcon } from 'shared/ui/icons/LaptopIcon.jsx';
import { UserAccountDropdownIcon } from 'shared/ui/icons/UserAccountDropdownIcon.jsx';

function Home() {
  return (
    <>
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

      {/* <!-- banner and category --> */}
      <div className='banner-container'>
        <div className='container'>
          <div className='categories'>
            <ul>
              <li className='category-menu'>
                <a>Woman’s Fashion</a>
                {/* <img src="./assets/DropDown-right.svg" /> */}
                <DropDownRightIcon />
              </li>
              <li className='category-menu'>
                <a>Men’s Fashion</a>
                {/* <img src="./assets/DropDown-right.svg" /> */}
                <DropDownRightIcon />
              </li>
              <li>
                <a>Electronics</a>
              </li>
              <li>
                <a>Home & Lifestyle</a>
              </li>
              <li>
                <a>Medicine</a>
              </li>
              <li>
                <a>Sports & Outdoor</a>
              </li>
              <li>
                <a>Baby’s & Toys</a>
              </li>
              <li>
                <a>Groceries & Pets</a>
              </li>
              <li>
                <a>Health & Beauty</a>
              </li>
            </ul>
          </div>

          <div className='banner-box'>
            {/* <img className="banner" src="./assets/banner.jpg" /> */}
            <BannerIcon className='banner' />
          </div>
        </div>
      </div>

      <div className='products-container'>
        <div className='container'>
          {/* <!-- flash sale header --> */}
          <div className='flash-sale-info'>
            <div className='flash-content-box'>
              <div className='flash-sale-tag'>
                <div className='red-box'></div>
                <span>Today's</span>
              </div>
              <div>
                <h2>Flash Sales</h2>
              </div>
            </div>

            <div className='left-right-btn'>
              <div className='ellipse'>
                {/* <img src="./assets/icons-arrow-left.svg" /> */}
                <IconsArrowLeftIcon />
              </div>
              <div className='ellipse'>
                {/* <img src="./assets/icons-arrow-right.svg" /> */}
                <IconsArrowRightIcon />
              </div>
            </div>
          </div>
        </div>

        <div className='product-row'>
          <div className='container'>
            {/* <!-- flash sale products --> */}

            <div className='product-card'>
              <div className='product-img-box'>
                <div className='product-info-bar'>
                  <div className='sale-tag'>
                    <span>-40%</span>
                  </div>
                  <div className='ellipse' style={{ backgroundColor: 'white' }}>
                    {/* <img src="./assets/heart-small.svg" /> */}
                    <HeartSmallIcon />
                  </div>
                </div>
                <div className='product-image-wrapper'>
                  {/* <img className="product-images" src="./assets/laptop.jpg" /> */}
                  <LaptopIcon className='product-images' />
                </div>
              </div>
              {/* <!-- product price rating --> */}
              <div className='product-content'>
                <h5>HAVIT HV-G92 Gamepad</h5>
                <p>
                  <span className='product-price'>$120</span>
                  <span
                    className='product-price'
                    style={{ textDecoration: 'lineThrough', color: '#000', opacity: 0.5 }}
                  >
                    $160
                  </span>
                </p>
                <div className='product-add-cart'>
                  <p>Add To Cart</p>
                </div>
              </div>
            </div>

            <div className='product-card'>
              <div className='product-img-box'>
                <div className='product-info-bar'>
                  <div className='sale-tag'>
                    <span>-40%</span>
                  </div>
                  <div className='ellipse' style={{ backgroundColor: 'white' }}>
                    {/* <img src="./assets/heart-small.svg" /> */}
                    <HeartSmallIcon />
                  </div>
                </div>
              </div>
              {/* <!-- product price rating --> */}
              <div className='product-content'>
                <h5>AK-900 Wired Keyboard</h5>
                <p>
                  <span className='product-price'>$960</span>
                  <span
                    className='product-price'
                    style={{ textDecoration: 'line-through', color: '#000', opacity: 0.5 }}
                  >
                    $1160
                  </span>
                </p>
                <div className='product-add-cart'>
                  <p>Add To Cart</p>
                </div>
              </div>
            </div>

            <div className='product-card'>
              <div className='product-img-box'>
                <div className='product-info-bar'>
                  <div className='sale-tag'>
                    <span>-40%</span>
                  </div>
                  <div className='ellipse' style={{ backgroundColor: 'white' }}>
                    {/* <img src="./assets/heart-small.svg" /> */}
                    <HeartSmallIcon />
                  </div>
                </div>
              </div>
              {/* <!-- product price rating --> */}
              <div className='product-content'>
                <h5>IPS LCD Gaming Monitor</h5>
                <p>
                  <span className='product-price'>$370</span>
                  <span
                    className='product-price'
                    style={{ textDecoration: 'line-through', color: '#000', opacity: 0.5 }}
                  >
                    $400
                  </span>
                </p>
                <div className='product-add-cart'>
                  <p>Add To Cart</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <!-- Best selling products --> */}
      <div className='products-container'>
        <div className='container'>
          {/* <!-- flash sale header --> */}
          <div className='flash-sale-info'>
            <div className='flash-content-box'>
              <div className='flash-sale-tag'>
                <div className='red-box'></div>
                <span>This Month</span>
              </div>
              <div>
                <h2>Best Selling Products</h2>
              </div>
            </div>

            <div className='left-right-btn'>
              <button>View All</button>
            </div>
          </div>
        </div>

        <div className='product-row'>
          <div className='container'>
            {/* <!-- flash sale products --> */}

            <div className='product-card'>
              <div className='product-img-box'>
                <div className='product-info-bar'>
                  <div className='sale-tag'>
                    <span>-40%</span>
                  </div>
                  <div className='ellipse' style={{ backgroundColor: 'white' }}>
                    {/* <img src="./assets/heart-small.svg" /> */}
                    <HeartSmallIcon />
                  </div>
                </div>
              </div>
              {/* <!-- product price rating --> */}
              <div className='product-content'>
                <h5>HAVIT HV-G92 Gamepad</h5>
                <p>
                  <span className='product-price'>$120</span>
                  <span
                    className='product-price'
                    style={{ textDecoration: 'line-through', color: '#000', opacity: 0.5 }}
                  >
                    $160
                  </span>
                </p>
                <div className='product-add-cart'>
                  <p>Add To Cart</p>
                </div>
              </div>
            </div>

            <div className='product-card'>
              <div className='product-img-box'>
                <div className='product-info-bar'>
                  <div className='sale-tag'>
                    <span>-40%</span>
                  </div>
                  <div className='ellipse' style={{ backgroundColor: 'white' }}>
                    {/* <img src="./assets/heart-small.svg" /> */}
                    <HeartSmallIcon />
                  </div>
                </div>
              </div>
              {/* <!-- product price rating --> */}
              <div className='product-content'>
                <h5>AK-900 Wired Keyboard</h5>
                <p>
                  <span className='product-price'>$960</span>
                  <span
                    className='product-price'
                    style={{ textDecoration: 'line-through', color: '#000', opacity: 0.5 }}
                  >
                    $1160
                  </span>
                </p>
                <div className='product-add-cart'>
                  <p>Add To Cart</p>
                </div>
              </div>
            </div>

            <div className='product-card'>
              <div className='product-img-box'>
                <div className='product-info-bar'>
                  <div className='sale-tag'>
                    <span>-40%</span>
                  </div>
                  <div className='ellipse' style={{ backgroundColor: 'white' }}>
                    {/* <img src="./assets/heart-small.svg" /> */}
                    <HeartSmallIcon />
                  </div>
                </div>
              </div>
              {/* <!-- product price rating --> */}
              <div className='product-content'>
                <h5>IPS LCD Gaming Monitor</h5>
                <p>
                  <span className='product-price'>$370</span>
                  <span
                    className='product-price'
                    style={{ textDecoration: 'line-through', color: '#000', opacity: 0.5 }}
                  >
                    $400
                  </span>
                </p>
                <div className='product-add-cart'>
                  <p>Add To Cart</p>
                </div>
              </div>
            </div>

            <div className='product-card'>
              <div className='product-img-box'>
                <div className='product-info-bar'>
                  <div className='sale-tag'>
                    <span>-40%</span>
                  </div>
                  <div className='ellipse' style={{ backgroundColor: 'white' }}>
                    {/* <img src="./assets/heart-small.svg" /> */}
                    <HeartSmallIcon />
                  </div>
                </div>
              </div>
              {/* <!-- product price rating --> */}
              <div className='product-content'>
                <h5>HAVIT HV-G92 Gamepad</h5>
                <p>
                  <span className='product-price'>$120</span>
                  <span
                    className='product-price'
                    style={{ textDecoration: 'line-through', color: '#000', opacity: 0.5 }}
                  >
                    $160
                  </span>
                </p>
                <div className='product-add-cart'>
                  <p>Add To Cart</p>
                </div>
              </div>
            </div>

            <div className='product-card'>
              <div className='product-img-box'>
                <div className='product-info-bar'>
                  <div className='sale-tag'>
                    <span>-40%</span>
                  </div>
                  <div className='ellipse' style={{ backgroundColor: 'white' }}>
                    {/* <img src="./assets/heart-small.svg" /> */}
                    <HeartSmallIcon />
                  </div>
                </div>
              </div>
              {/* <!-- product price rating --> */}
              <div className='product-content'>
                <h5>HAVIT HV-G92 Gamepad</h5>
                <p>
                  <span className='product-price'>$120</span>
                  <span
                    className='product-price'
                    style={{ textDecoration: 'line-through', color: '#000', opacity: 0.5 }}
                  >
                    $160
                  </span>
                </p>
                <div className='product-add-cart'>
                  <p>Add To Cart</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <footer>
        <div className='container'>
          <div className='footer-card'>
            <h3>Exclusive</h3>
            <h5 style={{ marginBottom: '24px' }}>Subscribe</h5>
            <p style={{ marginBottom: '16px' }}>Get 10% off your first order</p>
            <div className='footer-email-subscribe-input'>
              <input className='email-input' placeholder='Enter your email' />
              {/* <img src="./assets/icon-send.svg"/> */}
              <IconSendIcon />
            </div>
          </div>

          <div className='footer-card'>
            <h3>Support</h3>
            <p style={{ marginBottom: '16px' }}>111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.</p>
            <p style={{ margiBottom: '16px' }}>exclusive@gmail.com</p>
            <p>+88015-88888-9999</p>
          </div>

          <div className='footer-card'>
            <h3>Account</h3>
            <ul className='footer-links'>
              <li>
                <p>My Account</p>
              </li>
              <li>
                <p>Login / Register</p>
              </li>
              <li>
                <p>Cart</p>
              </li>
              <li>
                <p>Wishlist</p>
              </li>
              <li>
                <p>Shop</p>
              </li>
            </ul>
          </div>

          <div className='footer-card'>
            <h3>Quick Link</h3>
            <ul className='footer-links'>
              <li>
                <p>Privacy Policy</p>
              </li>
              <li>
                <p>Terms Of Use</p>
              </li>
              <li>
                <p>FAQ</p>
              </li>
              <li>
                <p>Contact</p>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Home;
