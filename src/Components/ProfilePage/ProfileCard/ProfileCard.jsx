import style from "./profilecard.module.css";
import forwardIcon from "./forward.svg";

const ProfileCard = ({ title, handleShow }) => {
  return (
    <div className={style.card} onClick={handleShow}>
      <p>{title}</p>
      <p>
        <img src={forwardIcon} alt="" />
      </p>
    </div>
  );
};

export default ProfileCard;
