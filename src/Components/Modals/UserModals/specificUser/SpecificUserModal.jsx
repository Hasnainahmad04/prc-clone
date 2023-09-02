import CheckBox from "../../../Common/Forms/CheckBox/CheckBox";
import Input from "../../../Common/Forms/Input/input";
import Switch from "../../../Common/Forms/switch/Switch";
import CommonModal from "../UserModal/UserModal";

const SpecificUserModal = (props) => {
  const { show, handleClose } = props;

  return (
    <CommonModal
      title={"Specific User Detail"}
      show={show}
      handleClose={handleClose}
    >
      <div style={{ padding: "15px" }}>
        <form>
          <Input
            type={"email"}
            name={"email"}
            id={"email"}
            placeholder={"Type Email"}
            label={"Email"}
          />
          <div style={{ display: "inline-block", margin: "20px 0" }}>
            <CheckBox
              name={"trialPeriod"}
              label={"Trial Period"}
              id={"trialPeriod"}
            />
          </div>
          <div style={{ display: "inline-block" }}>
            <CheckBox
              name={"subscribed"}
              label={"Subscribed"}
              id={"subscribed"}
            />
          </div>
          <div className="hr" />
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              padding: "15px 10px",
            }}
          >
            <span>Suspend User</span>
            <Switch />
          </div>

          <div className="hr" />

          <div style={{ textAlign: "center", padding: "10px" }}>
            <button className="btn-outline-150" type={"reset"}>
              cancel
            </button>
            <button className="btn-fill-150" type={"submit"}>
              Delete
            </button>
          </div>
        </form>
      </div>
    </CommonModal>
  );
};

export default SpecificUserModal;
