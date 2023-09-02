import { useState } from "react";
import { Modal } from "react-bootstrap";
import Input from "../../Common/Forms/Input/input";
import TextArea from "../../Common/Forms/TextArea/TextArea";
import CrossIcon from "./cross.svg";
import style from "./feedback.module.css";

const FeedbackModal = (props) => {
  const { onClose, show } = props;
  const [feedbackReply, setFeedbackReply] = useState({});

  const handleInput = ({ currentTarget: input }) => {
    const data = { ...feedbackReply };
    data[input.name] = input.value;
    setFeedbackReply(data);
  };
  return (
    <div>
      <Modal
        show={show}
        onHide={onClose}
        dialogClassName={style["modal-dialog"]}
      >
        <div className={style["modal-head"]}>
          <h5>Reply Feedback</h5>
          <span onClick={onClose}>
            <img src={CrossIcon} alt="" />
          </span>
        </div>
        <div className={style["modal-body"]}>
          <Input
            name={"email"}
            id={"email"}
            placeholder={"Email"}
            onChange={handleInput}
            value={feedbackReply["email"] || ""}
            type={"email"}
            label={"Email"}
          />
          <Input
            name={"title"}
            id={"title"}
            placeholder={"Title"}
            onChange={handleInput}
            value={feedbackReply["title"] || ""}
            type={"Text"}
            label={"Title"}
          />
          <TextArea
            name={"message"}
            id={"message"}
            placeholder={"Message"}
            label={"Message"}
            value={feedbackReply["message"] || ""}
            onChange={handleInput}
          />
          <TextArea
            name={"reponse"}
            id={"reponse"}
            placeholder={"Reponse"}
            label={"Ressage"}
            value={feedbackReply["reponse"] || ""}
            onChange={handleInput}
          />
          <div className="hr"></div>
          <div className={style["footer"]}>
            <button className="btn-outline-150">Cancel</button>
            <button className="btn-fill-150">Send</button>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default FeedbackModal;
