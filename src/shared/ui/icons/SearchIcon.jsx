import search from 'images/search.png';

export function SearchIcon({ alt, ...restProps }) {
  return <img alt={alt} src={search} {...restProps} />;
}
