import delIcon from "../../../assets/delIcon.svg";
import Clock from "./clock.svg";
import { MdEdit } from "react-icons/md";
import style from "./notifyCard.module.css";

const NotificationCard = (props) => {
  const { notification, onEdit, onDelete } = props;
  const dateFormat = {
    hour: "numeric",
    minute: "numeric",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  const dateToShow = new Date(notification.time).toLocaleDateString(
    "en-US",
    dateFormat
  );
  return (
    <div className={style.card}>
      <p className={style.desc}>{notification.title}</p>
      <p className={style.time}>
        <img src={Clock} alt="clock.." className={style.icon} />
        {dateToShow}
      </p>
      <p className={style.sent}>
        Sent To: <span className="text_black ms-2">{notification.sentTo}</span>
      </p>
      <hr className="m-1 p-1" />
      <button className={style.edit_btn} onClick={() => onEdit(notification)}>
        <MdEdit className={style.icon} />
        Edit
      </button>
      <button className={style.del_btn} onClick={() => onDelete(notification)}>
        <img src={delIcon} alt="del.." className={style.icon} />
        Delete
      </button>
    </div>
  );
};

export default NotificationCard;
