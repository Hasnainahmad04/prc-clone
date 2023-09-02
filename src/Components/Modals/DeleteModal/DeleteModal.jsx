import Modal from "react-bootstrap/Modal";
import deleteIcon from "./delete.svg";
import style from "./deletemodal.module.css";

const DeleteModal = (props) => {
  const { show, onClose, onRemove, title, desc } = props;
  return (
    <Modal
      show={show}
      onHide={onClose}
      dialogClassName={style["modal-dialog"]}
      centered
    >
      <div className={style["modal-inner"]}>
        <div className={style["modal-icon"]}>
          <img src={deleteIcon} alt="" />
        </div>

        <div className={style["modal-heading"]}>{title}</div>
        <div className={style["modal-desc"]}>{desc}</div>
        <div className={style["modal-btn"]}>
          <button className="btn-outline-150" onClick={onClose}>
            Cancel
          </button>
          <button className="btn-fill-150" onClick={onRemove}>
            Yes, Delete
          </button>
        </div>
      </div>
    </Modal>
  );
};

export default DeleteModal;
