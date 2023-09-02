import { useEffect, useState } from "react";
import style from "./clientcall.module.css";
import Modal from "react-bootstrap/Modal";
import FilePicker from "../../Common/Forms/filePicker/FilePicker";
import Input from "../../Common/Forms/Input/input";
import Select from "../../Common/Forms/select/select";
import TextArea from "../../Common/Forms/TextArea/TextArea";
import CrossIcon from "./cross.svg";

const ClientModal = (props) => {
  const { onClose, show, clientCall, onAdd, onUpdate, onDelete } = props;
  const [newClientCall, setNewClientCall] = useState({});

  useEffect(() => {
    setNewClientCall(clientCall);
  }, [clientCall]);

  const categories = [
    "Politics",
    "Equities",
    "Commodities",
    "Rates",
    "FX",
    "Property",
    "Presentations",
  ];

  const handleInput = ({ currentTarget: input }) => {
    const data = { ...newClientCall };
    data[input.name] = input.value;
    setNewClientCall(data);
  };
  const handleUpdate = () => {
    onUpdate(newClientCall);
    setNewClientCall({});
  };
  const handleAddNew = () => {
    newClientCall.id = Date.now();
    onAdd(newClientCall);
    setNewClientCall({});
  };
  const handleFilePicker = (ref) => {
    const data = { ...newClientCall };
    data.file = ref.current.files[0].name;
    console.log(ref.current.files);
    return setNewClientCall(data);
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
            {newClientCall.isUpdate
              ? "Specific Client Call Details"
              : "Publish Client Call"}
          </h5>
          <span
            onClick={() => {
              onClose();
              setNewClientCall({});
            }}
          >
            <img src={CrossIcon} alt="" />
          </span>
        </div>
        <div className={style["modal-body"]}>
          <Input
            type={"text"}
            name={"title"}
            id={"title"}
            placeholder={"Enter Title"}
            label={"Title"}
            value={newClientCall["title"] || ""}
            onChange={handleInput}
          />
          <FilePicker
            value={newClientCall.file}
            onChange={handleFilePicker}
            accept={"audio/mp3,audio/*;capture=microphone"}
            note={"* Please Upload Media File Type MP3,MP4"}
          />
          <TextArea
            name={"summary"}
            id={"summary"}
            placeholder={"Short Summary"}
            label={"Summary"}
            value={newClientCall["summary"] || ""}
            onChange={handleInput}
          />
          <div style={{ display: "flex" }}>
            <div style={{ width: "49%", marginRight: "20px" }}>
              <Select
                options={categories}
                id={"category"}
                name={"category"}
                label={"Category"}
                onChange={handleInput}
                value={newClientCall["category"]}
              />
            </div>
            <div style={{ width: "49%" }}>
              <Input
                type={"date"}
                name={"date"}
                id={"date"}
                label={"Date"}
                onChange={handleInput}
                value={newClientCall["date"] || ""}
              />
            </div>
          </div>
          <div className="hr"></div>
          <div className={style["footer"]}>
            {newClientCall.isUpdate ? (
              <button
                className="btn-outline-150"
                onClick={() => {
                  onClose();
                  onDelete(newClientCall);
                  setNewClientCall({});
                }}
              >
                Delete
              </button>
            ) : (
              <button
                className="btn-outline-150"
                onClick={() => {
                  onClose();
                  setNewClientCall({});
                }}
              >
                Cancel
              </button>
            )}

            {newClientCall.isUpdate ? (
              <button className="btn-fill-150" onClick={handleUpdate}>
                Edit
              </button>
            ) : (
              <button className="btn-fill-150" onClick={handleAddNew}>
                Publish
              </button>
            )}
          </div>
        </div>
      </Modal>
    </>
  );
};

export default ClientModal;
