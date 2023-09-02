import style from "./input.module.css";

const Input = (props) => {
  const { type, name, placeholder, onChange, value, label, error } = props;
  return (
    <div>
      <label htmlFor={name} className={style.label}>
        {label}
      </label>
      <input
        type={type}
        name={name}
        id={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={style.input}
        required
      />
      {error && (
        <div className={style.error}>
          <strong className="m-1"></strong>
          {error}
        </div>
      )}
    </div>
  );
};

export default Input;
