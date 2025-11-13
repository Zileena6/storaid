const InputField = ({
  label,
  name,
  type,
  value,
  placeholder,
  onChange,
  error,
}) => {
  return (
    <div className='input-container'>
      {label && <label htmlFor={name}>{label}</label>}
      <input
        className={`input-field ${error ? 'input-error' : ''} `}
        id={name}
        name={name}
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
      />
    </div>
  );
};
export default InputField;
