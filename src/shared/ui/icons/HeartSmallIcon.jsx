import heartSmall from 'images/heartSmall.svg';

export function HeartSmallIcon({ alt, ...restProps }) {
  return <img alt={alt} src={heartSmall} {...restProps} />;
}
