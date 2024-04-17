import { useEffect, useCallback, useState } from 'react';

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

import Laptop from 'images/laptop.jpg';

import { ProductCard } from 'components/product_card';

import { getProducts } from 'shared/api/product';

export function Home() {
  const [productsData, setProductsData] = useState([]);

  const getProductsData = useCallback(async () => {
    try {
      const { data } = await getProducts();
      console.log('data ::', data);
      setProductsData(data);
    } catch (error) {
      console.log('error ::', error);
    }
  }, []);

  useEffect(() => {
    getProductsData();
  }, []);

  return (
    <>
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

            {productsData.map((product) => {
              return <ProductCard key={product.id} productDetails={product} />;
            })}
          </div>
        </div>
      </div>
    </>
  );
}
