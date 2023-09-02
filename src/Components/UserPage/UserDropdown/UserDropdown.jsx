import style from "./userdrop.module.css";

const UserDropdown = (props) => {
  return (
    <div className={style["drop-wrapper"]}>
      <li className="dropdown-item">Subscribed</li>
      <li className="dropdown-item">Trial Period</li>
    </div>
  );
};

export default UserDropdown;
