import "./switch.module.css";

const Switch = (props) => {
  return (
    <>
      <div style={{ display: "flex" }}>
        <span style={{ padding: "5px 10px" }}>
          {props.suspendUser === true ? "yes" : "no"}
        </span>
        <span className="form-check form-switch">
          <input
            type="checkbox"
            className="form-check-input"
            checked={props.suspendUser}
          />
        </span>
      </div>
    </>
  );
};

export default Switch;
