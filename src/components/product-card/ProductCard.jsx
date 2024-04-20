import { useState } from 'react';
import { useCart } from 'shared/store/useCart';
import { HeartSmallIcon } from 'shared/ui/icons/HeartSmallIcon';

import { useDispatch, useSelector } from 'react-redux';

import { getCart, addToCart, removeFromCart } from 'shared/store/slices/cartSlice';

export function ProductCard({ productDetails }) {
  const [toggleCartBtn, setToggleCartBtn] = useState(false);

  const { brand, category, id, price, thumbnail, title } = productDetails;

  // const { cart, dispatchCart } = useCart();

  const dispatch = useDispatch();

  const cart = useSelector(getCart);

  const handleAddCart = () => {
    if (!toggleCartBtn) {
      dispatch(addToCart(productDetails));
    } else {
      dispatch(removeFromCart(productDetails));
    }
    setToggleCartBtn((toggleBtn) => !toggleBtn);
  };

  return (
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
          <img
            alt='product image'
            className='product-images'
            src={`data:image/jpeg;base64,${thumbnail}`}
          />
        </div>
      </div>
      {/* <!-- product price rating --> */}
      <div className='product-content'>
        <h5>{title}</h5>
        <p>
          <span className='product-price'>${price}</span>
          <span
            className='product-price'
            style={{ textDecoration: 'line-through', color: '#000', opacity: 0.5 }}
          >
            {0}
          </span>
        </p>
        <button onClick={handleAddCart} className='product-add-cart'>
          {toggleCartBtn ? 'Remove From Cart' : 'Add To Cart'}
        </button>
      </div>
    </div>
  );
}
