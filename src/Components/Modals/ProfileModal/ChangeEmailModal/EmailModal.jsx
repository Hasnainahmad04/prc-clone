import { useState } from "react";
import { Modal } from "react-bootstrap";
import Input from "../../../Common/Forms/Input/input";
import CrossIcon from "./cross.svg";
import style from "./emailmodal.module.css";

const EmailModal = ({ show, onClose }) => {
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
            name={"password"}
            id={"password"}
            placeholder={"Type Password"}
            value={newEmail["password"] || ""}
            onChange={handleInput}
          />
          <Input
            label={"Email"}
            type={"email"}
            name={"email"}
            id={"email"}
            placeholder={"Type Email"}
            value={newEmail["email"] || ""}
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

export default EmailModal;
