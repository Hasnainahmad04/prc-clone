import { useState } from "react";
import Header from "../Common/Header/Header";
import EmailModal from "../Modals/ProfileModal/ChangeEmailModal/EmailModal";
import PasswordModal from "../Modals/ProfileModal/ChangePassword/PasswordModal";
import ProfileCard from "./ProfileCard/ProfileCard";

const Profile = () => {
  const [emailModal, setEmailModal] = useState(false);
  const [passwordModal, setPasswordModal] = useState(false);

  const handleEmailModalShow = () => setEmailModal(true);
  const handleEmailModalClose = () => setEmailModal(false);
  const handlePasswordModalShow = () => setPasswordModal(true);
  const handlePasswordModalClose = () => setPasswordModal(false);

  return (
    <div className="content">
      <EmailModal show={emailModal} onClose={handleEmailModalClose} />
      <PasswordModal show={passwordModal} onClose={handlePasswordModalClose} />
      <Header title={"Account & Settings"} />
      <ProfileCard title={"Change Email"} handleShow={handleEmailModalShow} />
      <ProfileCard
        title={"Change Password"}
        handleShow={handlePasswordModalShow}
      />
      <ProfileCard title={"Logout"} />
    </div>
  );
};

export default Profile;
