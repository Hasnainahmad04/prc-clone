import React from "react";
import filterIcon from "./filter.svg";
import style from "./header.module.css";
import SearchBox from "./SearchBox/serachBox";

const Header = (props) => {
  const {
    title,
    addBtnTitle,
    search,
    filterBtn,
    handleShow,
    filterDropdown: Dropdown,
  } = props;
  return (
    <div className="m-3 d-flex flex-wrap">
      <div>
        <p className="header_text my-2">{title}</p>
      </div>
      <div className="ms-auto mx-2">{search && <SearchBox />}</div>
      <div className="mx-2">
        {filterBtn && (
          <>
            <div className="dropleft">
              <button
                className={`${style.filter_btn} text_danger`}
                data-bs-toggle="dropdown"
                id="dropdownMenuButton"
              >
                <img src={filterIcon} className="mx-1" /> Filter
              </button>
              <div className="dropdown-menu my-3">{Dropdown}</div>
            </div>
          </>
        )}
      </div>
      <div className="mx-2">
        {addBtnTitle && (
          <button className={style.add_btn} onClick={handleShow}>
            {addBtnTitle}
          </button>
        )}
      </div>
    </div>
  );
};

export default Header;
