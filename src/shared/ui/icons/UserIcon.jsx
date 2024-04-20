import user from 'images/user.svg';

export function UserIcon({ alt, ...restProps }) {
  return <img alt={alt} src={user} {...restProps} />;
}
