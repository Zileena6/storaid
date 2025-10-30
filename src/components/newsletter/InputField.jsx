const InputField = ({ label, name, type, value, placeholder, onChange }) => {
  return (
    <div className='input-container'>
      {label && <label htmlFor={name}>{label}</label>}
      <input
        className='input-field'
        id={name}
        name={name}
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        required
      />
    </div>
  );
};
export default InputField;
