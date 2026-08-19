export default function Button({ variant = 'primary', children, onClick, ...rest }) {
  return (
    <a className={`btn btn-${variant}`} onClick={onClick} role="button" tabIndex={0} {...rest}>
      {children}
    </a>
  );
}
