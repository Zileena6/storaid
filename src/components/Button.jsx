const Button = ({
  children,
  onClick,
  type = 'button',
  variant = 'lightBg',
}) => {
  return (
    <button type={type} onClick={onClick} className={`btn btn-${variant}`}>
      {children}
    </button>
  );
};
export default Button;
