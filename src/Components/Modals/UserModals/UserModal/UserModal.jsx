import Modal from "react-bootstrap/Modal";
import CrossIcon from "./cross.svg";
import style from "./modal.module.css";

function UserModal(props) {
  const { handleClose, show, children, title } = props;

  return (
    <>
      <Modal
        show={show}
        onHide={handleClose}
        dialogClassName={style["modal-dialog"]}
      >
        <div className={style["modal-head"]}>
          <h5>{title}</h5>
          <span onClick={() => handleClose()}>
            <img src={CrossIcon} alt="" />
          </span>
        </div>
        {children}
      </Modal>
    </>
  );
}

export default UserModal;
