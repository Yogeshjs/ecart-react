import Wishlist from 'images/Wishlist.svg';

export function WishListIcon({ alt, ...restProps }) {
  return <img alt={alt} src={Wishlist} {...restProps} />;
}
