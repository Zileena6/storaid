const Button = ({
  children,
  onClick,
  type = 'button',
  variant = 'light-bg',
}) => {
  return (
    <button type={type} onClick={onClick} className={`btn btn-${variant}`}>
      {children}
    </button>
  );
};
export default Button;
