import { useEffect, useState } from "react";
import Modal from "react-bootstrap/Modal";
import FilePicker from "../../Common/Forms/filePicker/FilePicker";
import Input from "../../Common/Forms/Input/input";
import Select from "../../Common/Forms/select/select";
import TextArea from "../../Common/Forms/TextArea/TextArea";
import style from "./articlemodal.module.css";
import CrossIcon from "./cross.svg";

const ArticleModal = (props) => {
  const { onClose, show, article, onAdd, onUpdate } = props;
  const [newArticle, setNewArticle] = useState({});

  useEffect(() => {
    setNewArticle(article);
    console.log(article);
  }, [article]);
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
    const data = { ...newArticle };
    data[input.name] = input.value;
    setNewArticle(data);
  };
  const handleUpdate = () => {
    onUpdate(newArticle);
    setNewArticle({});
  };
  const handleAddNew = () => {
    newArticle.id = Date.now();
    onAdd(newArticle);
    setNewArticle({});
  };
  const handleFilePicker = (ref) => {
    const data = { ...newArticle };
    data.file = ref.current.files[0].name;
    console.log(ref.current.files);
    return setNewArticle(data);
  };
  return (
    <>
      <Modal
        show={show}
        onHide={onClose}
        dialogClassName={style["modal-dialog"]}
      >
        <div className={style["modal-head"]}>
          <h5>{newArticle.isUpdate ? "Edit Article" : "Publish Article"}</h5>
          <span
            onClick={() => {
              onClose();
              setNewArticle({});
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
            value={newArticle["title"] || ""}
            onChange={handleInput}
          />
          <TextArea
            name={"summary"}
            id={"summary"}
            placeholder={"Short Summary"}
            label={"Summary"}
            value={newArticle["summary"] || ""}
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
                value={newArticle["category"]}
              />
            </div>
            <div style={{ width: "49%" }}>
              <Input
                type={"date"}
                name={"date"}
                id={"date"}
                label={"Date"}
                onChange={handleInput}
                value={newArticle["date"] || ""}
              />
            </div>
          </div>
          <FilePicker
            value={newArticle.file}
            onChange={handleFilePicker}
            accept={"application/pdf, application/vnd.ms-excel"}
            note={"*Please upload file type PDF"}
          />
          <div className="hr"></div>
          <div className={style["footer"]}>
            <button
              className="btn-outline-150"
              onClick={() => {
                onClose();
                setNewArticle({});
              }}
            >
              Cancel
            </button>

            {newArticle.isUpdate ? (
              <button
                className="btn-fill-150"
                style={{ width: "190px" }}
                onClick={handleUpdate}
              >
                Save Changes
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

export default ArticleModal;
