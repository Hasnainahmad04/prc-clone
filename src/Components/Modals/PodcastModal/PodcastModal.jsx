import { useEffect, useState } from "react";
import style from "./podcastmodal.module.css";
import Modal from "react-bootstrap/Modal";
import FilePicker from "../../Common/Forms/filePicker/FilePicker";
import Input from "../../Common/Forms/Input/input";
import Select from "../../Common/Forms/select/select";
import TextArea from "../../Common/Forms/TextArea/TextArea";
import CrossIcon from "./cross.svg";

const PodcastModal = (props) => {
  const { onClose, show, podcast, onAdd, onUpdate, onDelete } = props;
  const [newPodcast, setNewPodcast] = useState({});

  useEffect(() => {
    setNewPodcast(podcast);
  }, [podcast]);

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
    const data = { ...newPodcast };
    data[input.name] = input.value;
    setNewPodcast(data);
  };
  const handleUpdate = () => {
    onUpdate(newPodcast);
    setNewPodcast({});
  };
  const handleAddNew = () => {
    newPodcast.id = Date.now();
    onAdd(newPodcast);
    setNewPodcast({});
  };
  const handleFilePicker = (ref) => {
    const data = { ...newPodcast };
    data.file = ref.current.files[0].name;
    console.log(ref.current.files);
    return setNewPodcast(data);
  };
  return (
    <>
      <Modal
        show={show}
        onHide={onClose}
        dialogClassName={style["modal-dialog"]}
      >
        <div className={style["modal-head"]}>
          <h5>{newPodcast.isUpdate ? "Edit Podcast" : "Publish Podcast"}</h5>
          <span
            onClick={() => {
              onClose();
              setNewPodcast({});
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
            value={newPodcast["title"] || ""}
            onChange={handleInput}
          />
          <FilePicker
            value={newPodcast.file}
            onChange={handleFilePicker}
            accept={"audio/mp3,audio/*;capture=microphone"}
            note={"* Please Upload Media File Type MP3,MP4"}
          />
          <TextArea
            name={"summary"}
            id={"summary"}
            placeholder={"Short Summary"}
            label={"Summary"}
            value={newPodcast["summary"] || ""}
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
                value={newPodcast["category"]}
              />
            </div>
            <div style={{ width: "49%" }}>
              <Input
                type={"date"}
                name={"date"}
                id={"date"}
                label={"Date"}
                onChange={handleInput}
                value={newPodcast["date"] || ""}
              />
            </div>
          </div>
          <div className="hr"></div>
          <div className={style["footer"]}>
            {newPodcast.isUpdate ? (
              <button
                className="btn-outline-150"
                onClick={() => {
                  onClose();
                  onDelete(newPodcast);
                  setNewPodcast({});
                }}
              >
                Delete
              </button>
            ) : (
              <button
                className="btn-outline-150"
                onClick={() => {
                  onClose();
                  setNewPodcast({});
                }}
              >
                Cancel
              </button>
            )}

            {newPodcast.isUpdate ? (
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

export default PodcastModal;
