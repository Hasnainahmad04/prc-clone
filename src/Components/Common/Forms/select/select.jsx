import style from "./select.module.css";

const Select = (props) => {
  const { name, onChange, value, label, error, options } = props;
  return (
    <div>
      <label htmlFor={name} className={style["label"]}>
        {label}
      </label>
      <select
        onChange={onChange}
        id={name}
        name={name}
        value={value}
        className={style["select"]}
      >
        {options.map((option, index) => {
          return (
            <option value={option} key={option + index}>
              {option}
            </option>
          );
        })}
      </select>
      {error && (
        <div className="text-danger">
          <strong className="m-1">
            <i className="fa-solid fa-circle-info"></i>
          </strong>
          {error}
        </div>
      )}
    </div>
  );
};

export default Select;
