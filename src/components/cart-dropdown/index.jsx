import { useSelector, useDispatch } from 'react-redux';
import { getCart, addToCart, removeFromCart } from 'shared/store/slices/cartSlice';

export function CartDropDown() {
  const cart = useSelector(getCart);
  const dispatch = useDispatch();

  const handleIncreaseCartItem = (product) => (e) => {
    e.stopPropagation();
    dispatch(addToCart(product));
  };

  const handleDecreaseCartItem = (product) => (e) => {
    e.stopPropagation();
    dispatch(removeFromCart(product));
  };

  return (
    <div className='cart-dropdown-container'>
      <div className='account-dropdown-item'>
        <p>Product</p>
        <p>Qty</p>
        <p>Add/Remove</p>
      </div>

      {cart.map((item, index) => (
        <div key={item.id} className='account-dropdown-item'>
          <img
            alt='product image'
            style={{ width: '16px', height: '16px' }}
            src={`data:image/jpeg;base64,${item.thumbnail}`}
          />
          <p>{item.qty}</p>
          <div className='left-right-btn'>
            <div onClick={handleIncreaseCartItem(item)} className='ellipse'>
              +
            </div>
            <div onClick={handleDecreaseCartItem(item)} className='ellipse'>
              -
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
