import { useRef } from "react";

import style from "./file.module.css";

const FilePicker = ({ value, onChange, accept, note }) => {
  const actualBtnRef = useRef(null);
  return (
    <div>
      <label className={style["label"]}>Upload Media File</label>
      <input
        type="file"
        name="file"
        id="file"
        hidden
        accept={accept}
        ref={actualBtnRef}
        onChange={() => onChange(actualBtnRef)}
      />
      <label htmlFor="file" className={style["file"]}>
        <span>{value === undefined ? "+ Upload Media File" : value}</span>
      </label>
      <span className={style["note"]}>{note}</span>
    </div>
  );
};

export default FilePicker;
