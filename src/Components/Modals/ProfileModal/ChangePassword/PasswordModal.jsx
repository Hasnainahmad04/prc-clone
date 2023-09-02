import { useState } from "react";
import { Modal } from "react-bootstrap";
import Input from "../../../Common/Forms/Input/input";
import CrossIcon from "./cross.svg";
import style from "./passwordmodal.module.css";

const PasswordModal = ({ show, onClose }) => {
  const [newEmail, setNewEmail] = useState({});

  const handleInput = ({ currentTarget: input }) => {
    const data = { ...newEmail };
    data[input.name] = input.value;
    setNewEmail(data);
  };
  return (
    <div>
      <Modal
        show={show}
        onHide={onClose}
        dialogClassName={style["modal-dialog"]}
      >
        <div className={style["modal-head"]}>
          <h5>Change Email</h5>
          <span onClick={onClose}>
            <img src={CrossIcon} alt="" />
          </span>
        </div>
        <div className={style["modal-body"]}>
          <Input
            label={"Old Password"}
            type={"text"}
            name={"old_password"}
            id={"old_password"}
            placeholder={"Type Password"}
            value={newEmail["old_password"] || ""}
            onChange={handleInput}
          />
          <Input
            label={"New Password"}
            type={"text"}
            name={"new_password"}
            id={"new_password"}
            placeholder={"Type Email"}
            value={newEmail["new_password"] || ""}
            onChange={handleInput}
          />
          <Input
            label={"Confirm Password"}
            type={"text"}
            name={"confirm_password"}
            id={"confirm_password"}
            placeholder={"Type Email"}
            value={newEmail["confirm_password"] || ""}
            onChange={handleInput}
          />
          <div className={style["modal-footer"]}>
            <button
              className="btn-outline-150"
              onClick={() => {
                onClose();
                setNewEmail({});
              }}
            >
              Cancel
            </button>
            <button
              className="btn-fill-150"
              onClick={() => {
                console.log(newEmail);
                onClose();
                setNewEmail({});
              }}
            >
              Change
            </button>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default PasswordModal;
