import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import style from "./pagination.module.css";

const Pagination = ({ itemsPerPage, totelItems, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totelItems / itemsPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <div className={style["wrapper"]}>
      <div className={style["icon-disabled"]}>
        <IoIosArrowBack />
      </div>
      <select
        name="pagination"
        id="pagination"
        className={style["select"]}
        onChange={(e) => paginate(e.target.value)}
      >
        {pageNumbers.map((item) => {
          return <option value={item} key={item}>{`Page ${item}`}</option>;
        })}
      </select>
      <div className={style["icon"]}>
        <IoIosArrowForward />
      </div>
    </div>
  );
};

export default Pagination;
