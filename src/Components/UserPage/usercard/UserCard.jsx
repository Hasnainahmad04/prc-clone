import style from "./usercard.module.css";

const UserCard = (props) => {
  const { item, onClick } = props;
  return (
    <div onClick={() => onClick(item)}>
      <ul>
        <li className={style.list}>
          <span className="text_danger">{item.email}</span>
          <span className="text_black">
            {item.trialPeriod === true ? "Yes" : "No"}
          </span>
        </li>
      </ul>
    </div>
  );
};

export default UserCard;
