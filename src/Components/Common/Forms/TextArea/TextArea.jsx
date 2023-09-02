import style from "./textarea.module.css";

const TextArea = (props) => {
  const { name, id, placeholder, onChange, value, label, error } = props;

  return (
    <div>
      <label htmlFor={id} className={style.label}>
        {label}
      </label>
      <textarea
        name={name}
        id={id}
        placeholder={placeholder}
        className={style["textArea"]}
        onChange={onChange}
        value={value}
      ></textarea>

      {error && (
        <div className={style.error}>
          <strong className="m-1"></strong>
          {error}
        </div>
      )}
    </div>
  );
};

export default TextArea;
