import style from "./searchbox.module.css";
import icon from "./Vector.svg";
const SearchBox = (props) => {
  const { type, name, id, value, onChange } = props;
  return (
    <>
      <input
        type={type}
        name={name}
        id={id}
        className={style["search"]}
        placeholder="Search..."
        value={value}
        onChange={onChange}
      />
      <img src={icon} className={style.icon} />
    </>
  );
};

export default SearchBox;
