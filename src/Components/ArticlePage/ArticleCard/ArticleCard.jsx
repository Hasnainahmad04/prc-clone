import style from "./articlecard.module.css";
import fileIcon from "../fileIcon.svg";
import logo from "../../../assets/logo.svg";
import delIcon from "../../../assets/delIcon.svg";
import { MdEdit } from "react-icons/md";

const ArticleCard = ({ article, onEdit, onDelete }) => {
  const dateFormat = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  const dateToShow = new Date(article.date).toLocaleDateString(
    "en-US",
    dateFormat
  );
  return (
    <div className={style.card}>
      <div className={style.card_header}>
        <img src={logo} alt="logo.." width={"40"} height={"40"} />
      </div>
      <div className={style.card_body}>
        <h6 className={`${style.card_title} text_black`}>
          <b>{article.title}</b>
        </h6>
        <div className={style.card_file}>
          <img src={fileIcon} className="px-2" />
          <span>{article.file}</span>
        </div>
        <p className={style.card_desc}>{article.summary}</p>
        <div className={style.card_footer}>
          <p className="text_gray">
            Category:
            <span className="text_black mx-1">
              <b> {article.category} </b>
            </span>
          </p>
          <p className="mx-3 text_gray">{dateToShow}</p>
        </div>
        <hr className="m-1 p-1" />
        <button className={style.edit_btn} onClick={() => onEdit(article)}>
          <MdEdit className={style.icon} />
          Edit
        </button>
        <button className={style.del_btn} onClick={() => onDelete(article)}>
          <img src={delIcon} alt="del.." className={style.icon} />
          Delete
        </button>
      </div>
    </div>
  );
};

export default ArticleCard;
