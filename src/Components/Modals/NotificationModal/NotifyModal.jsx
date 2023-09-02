import { useEffect, useState } from "react";
import Modal from "react-bootstrap/Modal";
import Input from "../../Common/Forms/Input/input";
import Select from "../../Common/Forms/select/select";
import TextArea from "../../Common/Forms/TextArea/TextArea";
import CrossIcon from "./cross.svg";
import style from "./notifymodal.module.css";

const NotifyModal = (props) => {
  const { onClose, show, notification, onAdd, onUpdate, onDelete } = props;
  const [newNotification, setNewNotification] = useState({});

  useEffect(() => {
    setNewNotification(notification);
  }, [notification]);

  const categories = ["Subscriber", "Trail"];

  const handleInput = ({ currentTarget: input }) => {
    const data = { ...newNotification };
    data[input.name] = input.value;
    setNewNotification(data);
  };
  const handleUpdate = () => {
    onUpdate(newNotification);
    setNewNotification({});
  };
  const handleAddNew = () => {
    newNotification.id = Date.now();
    onAdd(newNotification);
    setNewNotification({});
    console.log(newNotification);
  };

  return (
    <>
      <Modal
        show={show}
        onHide={onClose}
        dialogClassName={style["modal-dialog"]}
      >
        <div className={style["modal-head"]}>
          <h5>
            {newNotification.isUpdate
              ? "Edit Notification"
              : "Create New Notification"}
          </h5>
          <span
            onClick={() => {
              onClose();
              setNewNotification({});
            }}
          >
            <img src={CrossIcon} alt="" />
          </span>
        </div>
        <div className={style["modal-body"]}>
          <TextArea
            name={"title"}
            id={"title"}
            placeholder={"Notification Title"}
            label={"Notification Name"}
            value={newNotification["title"] || ""}
            onChange={handleInput}
          />
          <Input
            type={"datetime-local"}
            name={"time"}
            id={"time"}
            label={"Schedule Time"}
            onChange={handleInput}
            value={newNotification["time"] || ""}
          />
          <Select
            options={categories}
            id={"sentTo"}
            name={"sentTo"}
            label={"To Whom it Sent"}
            onChange={handleInput}
            value={newNotification["sentTo"]}
          />
          <div className="hr" style={{ margin: "30px 0" }}></div>
          <div className={style["footer"]}>
            <button
              className="btn-outline-150"
              onClick={() => {
                onClose();
                setNewNotification({});
              }}
            >
              Cancel
            </button>

            {newNotification.isUpdate ? (
              <button
                className="btn-fill-150"
                onClick={handleUpdate}
                style={{ width: "200px" }}
              >
                Save Changes
              </button>
            ) : (
              <button className="btn-fill-150" onClick={handleAddNew}>
                Create
              </button>
            )}
          </div>
        </div>
      </Modal>
    </>
  );
};

export default NotifyModal;
