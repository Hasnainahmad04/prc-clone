import { useState } from "react";
import CheckBox from "../Forms/CheckBox/CheckBox";
import Input from "../Forms/Input/input";
import ClearIcon from "./ClearIcon.svg";
import style from "./articledrop.module.css";

const FilterDropdown = () => {
  const [categories, setCategories] = useState([
    "Politics",
    "Commodities",
    "Equities",
    "Rates",
    "FX",
    "Property",
    "Presentations",
  ]);
  return (
    <div className={style["drop-wrapper"]}>
      <p>Filter By Date</p>
      <div className={style["filter-by-date"]}>
        <div className={style["input"]}>
          <Input label={"From"} type={"date"} />
        </div>
        <div className={style["input"]}>
          <Input label={"To"} type={"date"} />
        </div>
      </div>
      <div className="hr"></div>
      <p>Filter By Category</p>
      <div>
        {categories.map((item) => {
          return (
            <div className="my-3">
              <CheckBox label={item} />
            </div>
          );
        })}
        <div className="hr my-3"></div>
        <button className={style["apply-btn"]}>Apply Filter</button>
        <button className={style["clear-btn"]}>
          <img src={ClearIcon} alt="icon" className={style["icon"]} />
          Clear
        </button>
      </div>
    </div>
  );
};

export default FilterDropdown;
