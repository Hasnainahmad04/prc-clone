import { useState } from "react";
import CheckBox from "../../../Common/Forms/CheckBox/CheckBox";
import Input from "../../../Common/Forms/Input/input";
import UserModal from "../UserModal/UserModal";

const AddUserModal = (props) => {
  const { show, handleClose } = props;

  const [newUserData, setNewUserData] = useState({
    email: "",
    temporaryPassword: "",
    download_link: "",
    subscribed: false,
    trialPeriod: false,
  });

  const [formError, setFormError] = useState({});

  const handleInput = ({ currentTarget: input }) => {
    const errors = {};
    const errorMessage = validateInput(input);

    if (errorMessage) errors[input.name] = errorMessage;
    else delete errors[input.name];

    const data = { ...newUserData };
    data[input.name] = input.value;
    setFormError(errors);
    setNewUserData(data);
  };

  const handletrialPeriod = () => {
    const data = { ...newUserData };
    data.trialPeriod = !data.trialPeriod;
    setNewUserData(data);
  };

  const handleSubscribe = () => {
    const data = { ...newUserData };
    data.trialPeriod = !data.trialPeriod;
    setNewUserData(data);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validateForm();
    setFormError(errors || {});
    if (errors) return;
    console.log(newUserData);
    // props.onSubmit(newUserData);
    // setNewUserData({ download_link: "", temporaryPassword: "", email: "" });
  };

  const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
  const urlRegex =
    /[(http(s)?):\/\/(www\.)?a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/;

  const validateInput = ({ name, value }) => {
    if (name === "download_link") {
      if (!urlRegex.test(value)) return "Enter A valid URL";
    }
    if (name === "email") {
      if (!emailRegex.test(value)) return "Enter a valid Email";
    }
    if (name === "temporaryPassword") {
      if (value.length < 6) return "Password Must be at least 6 Characters";
    }
  };

  const validateForm = () => {
    const errors = {};

    const { email, temporaryPassword, download_link } = newUserData;
    if (!emailRegex.test(email)) {
      errors.email = "Please Enter A Valid Email";
    }
    if (!urlRegex.test(download_link)) {
      errors.download_link = "Enter A valid URL";
    }
    if (temporaryPassword.length < 5) {
      errors.temporaryPassword = "Password Must be at least 6 Characters";
    }
    return Object.keys(errors).length !== 0 ? errors : null;
  };

  const handleCancel = () => {
    setNewUserData({
      email: " ",
      temporaryPassword: "",
      download_link: "",
      trialPeriod: false,
      subscribed: false,
    });
    props.handleClose();
  };

  return (
    <UserModal title={"Add New User"} show={show} handleClose={handleClose}>
      <div style={{ padding: "15px" }}>
        <form onSubmit={handleSubmit} autoComplete={"off"}>
          <Input
            type={"email"}
            name={"email"}
            id={"email"}
            placeholder={"Type Email"}
            label={"Email"}
            error={formError["email"]}
            value={newUserData["email"]}
            onChange={handleInput}
          />
          <div style={{ display: "inline-block", margin: "20px 0" }}>
            <CheckBox
              name={"trialPeriod"}
              label={"Trial Period"}
              id={"trialPeriod"}
              value={newUserData["trialPeriod"]}
              onChange={handletrialPeriod}
            />
          </div>
          <div style={{ display: "inline-block" }}>
            <CheckBox
              name={"subscribed"}
              label={"Subscribed"}
              id={"subscribed"}
              value={newUserData["subscribed"]}
              onChange={handleSubscribe}
            />
          </div>
          <Input
            type={"text"}
            name={"download_link"}
            id={"download_link"}
            placeholder={"Type Download link"}
            label={"Download Link"}
            error={formError["download_link"]}
            value={newUserData["download_link"]}
            onChange={handleInput}
          />
          <Input
            type={"text"}
            name={"temporaryPassword"}
            id={"temporaryPassword"}
            placeholder={"Type Password"}
            label={"Temporary Password"}
            error={formError["temporaryPassword"]}
            value={newUserData["temporaryPassword"]}
            onChange={handleInput}
          />
          <div style={{ margin: "20px 0", textAlign: "center" }}>
            <button
              className="btn-outline-150"
              onClick={handleCancel}
              type={"reset"}
            >
              cancel
            </button>
            <button className="btn-fill-150" disabled={validateForm()}>
              send
            </button>
          </div>
        </form>
      </div>
    </UserModal>
  );
};

export default AddUserModal;
