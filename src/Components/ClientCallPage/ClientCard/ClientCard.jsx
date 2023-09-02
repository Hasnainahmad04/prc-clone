import style from "./clientcard.module.css";
import logo from "../../../assets/logo.svg";

const ClientCard = (props) => {
  const { clientCall, onEdit } = props;
  const dateFormat = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  const dateToShow = new Date(clientCall.date).toLocaleDateString(
    "en-US",
    dateFormat
  );
  return (
    <div className={style.card}>
      <div className={style.card_header}>
        <img src={logo} alt="logo.." width={"40"} height={"40"} />
      </div>
      <div className={style.card_body}>
        <h6
          className={`${style.card_title} text_black`}
          onClick={() => onEdit(clientCall)}
        >
          <b>{clientCall.title}</b>
        </h6>
        <p className={style.card_desc}>{clientCall.summary}</p>
        <div className={style.card_footer}>
          <p className="text_gray">
            Category:
            <span className="text_black mx-1">
              <b> {clientCall.category} </b>
            </span>
          </p>
          <p className="mx-3 text_gray">{dateToShow}</p>
        </div>
      </div>
    </div>
  );
};

export default ClientCard;
