const Button = ({
  btnText,
  onClick,
  type = 'button',
  variant = 'light-bg',
}) => {
  return (
    <button type={type} onClick={onClick} className={`btn btn-${variant}`}>
      {btnText}
    </button>
  );
};
export default Button;
