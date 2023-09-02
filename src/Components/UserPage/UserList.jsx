import { useState } from "react";
import Header from "../Common/Header/Header";
import Pagination from "../Common/Pagination/Pagination";
import AddUserModal from "../Modals/UserModals/AddUser/AddUserModal";
import SpecificUserModal from "../Modals/UserModals/specificUser/SpecificUserModal";
import UserCard from "./usercard/UserCard";
import UserDropdown from "./UserDropdown/UserDropdown";
import style from "./userlist.module.css";

const UserList = () => {
  const [addUserModal, setAddUserModal] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(10);
  const [specificUserModal, setSpecificUserModal] = useState(false);

  const [user, setUser] = useState([
    {
      id: 1,
      email: "heavyrain@example.com 1",
      trialPeriod: true,
      subscribed: false,
      suspendUser: false,
    },
    {
      id: 2,
      email: "heavyrain@example.com 2",
      trialPeriod: true,
      subscribed: false,
      suspendUser: false,
    },
    {
      id: 3,
      email: "heavyrain@example.com 3",
      trialPeriod: true,
      subscribed: false,
      suspendUser: false,
    },
    {
      id: 4,
      email: "heavyrain@example.com 4",
      trialPeriod: true,
      subscribed: false,
      suspendUser: false,
    },
    {
      id: 5,
      email: "heavyrain@example.com 5",
      trialPeriod: false,
      subscribed: true,
      suspendUser: false,
    },
    {
      id: 6,
      email: "heavyrain@example.com 6",
      trialPeriod: true,
      subscribed: false,
      suspendUser: false,
    },
    {
      id: 7,
      email: "heavyrain@example.com 7",
      trialPeriod: true,
      subscribed: false,
      suspendUser: false,
    },
    {
      id: 8,
      email: "heavyrain@example.com 8",
      trialPeriod: true,
      subscribed: false,
      suspendUser: false,
    },
    {
      id: 9,
      email: "heavyrain@example.com 9",
      trialPeriod: true,
      subscribed: false,
      suspendUser: false,
    },
    {
      id: 10,
      email: "heavyrain@example.com 10",
      trialPeriod: true,
      subscribed: false,
      suspendUser: false,
    },
  ]);
  const handleUserModalShow = () => {
    setAddUserModal(true);
  };
  const handleUserModalClose = () => {
    setAddUserModal(false);
  };
  const handleSpecificUserModalShow = (item) => {
    setSpecificUserModal(true);
    console.log(item);
  };
  const handleSpecificUserModalClose = () => {
    setSpecificUserModal(false);
  };

  // Get current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentUser = user.slice(indexOfFirstPost, indexOfLastPost);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="content">
      <div className={`${style.container} text_gray`}>
        <Header
          title={"List Of User"}
          addBtnTitle={"+ Add new User"}
          filterBtn={true}
          search={true}
          handleShow={handleUserModalShow}
          filterDropdown={<UserDropdown />}
        />
        <AddUserModal show={addUserModal} handleClose={handleUserModalClose} />
        <SpecificUserModal
          show={specificUserModal}
          handleClose={handleSpecificUserModalClose}
        />
        <div className={style.header_txt}>
          <p>EMAIL</p>
          <p>TRAIL PERIOD</p>
        </div>
        {currentUser.map((item) => {
          return (
            <>
              <UserCard
                key={item.id}
                item={item}
                onClick={handleSpecificUserModalShow}
              />
            </>
          );
        })}
      </div>
      <div className="pagination-wrapper">
        <Pagination
          itemsPerPage={postsPerPage}
          totelItems={user.length}
          paginate={paginate}
        />
      </div>
    </div>
  );
};

export default UserList;
