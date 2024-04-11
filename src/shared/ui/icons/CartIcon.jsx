import Cart from 'images/Cart.svg';

export function CartIcon({ alt, ...restProps }) {
  return <img alt={alt} src={Cart} {...restProps} />;
}
