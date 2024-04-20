import laptop from 'images/laptop.jpg';

export function LaptopIcon({ alt, ...restProps }) {
  return <img alt={alt} src={laptop} {...restProps} />;
}
