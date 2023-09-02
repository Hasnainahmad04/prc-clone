import ReplyIcon from "./Vector.svg";
import style from "./fbcard.module.css";

const FBCard = (props) => {
  const { feedback, onShow } = props;
  return (
    <div>
      <ul>
        <li className={style.list}>
          <span className="text_black">{feedback.email}</span>
          <span className="text_black">{feedback.subject}</span>
          <button className={style.action_btn} onClick={onShow}>
            <img src={ReplyIcon} alt="icon" className={style.icon} />
            Reply
          </button>
        </li>
      </ul>
    </div>
  );
};

export default FBCard;
