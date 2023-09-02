import style from "./checkbox.module.css";
const CheckBox = (props) => {
  const { checked, label, name, id, onChange, value } = props;
  return (
    <div className={style.wrapper}>
      <input
        type="checkbox"
        name={name}
        id={id}
        value={value}
        className={style.checkBox}
        checked={checked}
        onChange={onChange}
      />
      <label htmlFor={name} className={style.checkLabel}>
        {label}
      </label>
    </div>
  );
};

export default CheckBox;
