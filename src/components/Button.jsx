const Button = ({
  btnText,
  onClick,
  type = 'button',
  variant = 'light-bg',
}) => {
  return (
    <div className='btn-wrapper'>
      <button type={type} onClick={onClick} className={`btn btn-${variant}`}>
        {btnText}
      </button>
    </div>
  );
};
export default Button;
