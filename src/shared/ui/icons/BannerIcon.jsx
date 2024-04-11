import banner from 'images/banner.jpg';

export function BannerIcon({ alt, ...restProps }) {
  return <img alt={alt} src={banner} {...restProps} />;
}
