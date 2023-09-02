import { useState } from "react";
import Header from "../Common/Header/Header";
import Pagination from "../Common/Pagination/Pagination";
import DeleteModal from "../Modals/DeleteModal/DeleteModal";
import NotifyModal from "../Modals/NotificationModal/NotifyModal";
import NotificationCard from "./NotificationCard/NotifyCard";

const Notification = () => {
  const [notifymodal, setNotifyModal] = useState(false);
  const [deleteModal, setDeleteModal] = useState(false);
  const [updateNotification, setUpdateNotification] = useState({});
  const [notificationToRemove, setNotificationToRemove] = useState({});
  const [postsPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);
  const [notifications, setNotifications] = useState([
    {
      id: 1,
      title:
        "Notification title like this Lorem ipsum dolor sit amet, consectetur  adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis",
      sentTo: "Subscriber",
      time: "2023-02-10T22:11",
    },
    {
      id: 2,
      title:
        "Notification title like this Lorem ipsum dolor sit amet, consectetur  adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis",
      sentTo: "Subscriber",
      time: "2023-02-10T22:11",
    },
    {
      id: 3,
      title:
        "Notification title like this Lorem ipsum dolor sit amet, consectetur  adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis",
      sentTo: "Subscriber",
      time: "2023-02-10T22:11",
    },
    {
      id: 4,
      title:
        "Notification title like this Lorem ipsum dolor sit amet, consectetur  adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis",
      sentTo: "Subscriber",
      time: "2023-02-10T22:11",
    },
    {
      id: 5,
      title:
        "Notification title like this Lorem ipsum dolor sit amet, consectetur  adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis",
      sentTo: "Subscriber",
      time: "2023-02-10T22:11",
    },
    {
      id: 6,
      title:
        "Notification title like this Lorem ipsum dolor sit amet, consectetur  adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis",
      sentTo: "Subscriber",
      time: "2023-02-10T22:11",
    },
    {
      id: 10,
      title:
        "Notification title like this Lorem ipsum dolor sit amet, consectetur  adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis",
      sentTo: "Subscriber",
      time: "2023-02-10T22:11",
    },
    {
      id: 7,
      title:
        "Notification title like this Lorem ipsum dolor sit amet, consectetur  adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis",
      sentTo: "Subscriber",
      time: "2023-02-10T22:11",
    },
    {
      id: 8,
      title:
        "Notification title like this Lorem ipsum dolor sit amet, consectetur  adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis",
      sentTo: "Subscriber",
      time: "2023-02-10T22:11",
    },
    {
      id: 9,
      title:
        "Notification title like this Lorem ipsum dolor sit amet, consectetur  adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis",
      sentTo: "Subscriber",
      time: "2023-02-10T22:11",
    },
  ]);

  const handleNotifyModalshow = () => setNotifyModal(true);
  const handleNotifyModalClose = () => setNotifyModal(false);

  const handleAdd = (notification) => {
    const data = [notification, ...notifications];
    setNotifications(data);
    setNotifyModal(false);
  };
  const handleUpdate = (notification) => {
    const index = notifications.findIndex(
      (item) => item.id === notification.id
    );
    const data = [...notifications];
    data[index] = { ...notification, isUpdate: false };
    setNotifications(data);
    setNotifyModal(false);
  };

  const onEdit = (notification) => {
    handleNotifyModalshow();
    setUpdateNotification({ ...notification, isUpdate: true });
  };
  const handleRemove = () => {
    const clone = [...notifications];
    const Updated = clone.filter((item) => item.id !== notificationToRemove.id);
    setNotifications(Updated);
    setDeleteModal(false);
  };
  const handleDeleteModalShow = (notification) => {
    setDeleteModal(true);
    setNotificationToRemove(notification);
  };
  const handleDeleteModalClose = () => setDeleteModal(false);

  // Get current Articles
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentNotifictions = notifications.slice(
    indexOfFirstPost,
    indexOfLastPost
  );

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  return (
    <div className="content">
      <NotifyModal
        notification={updateNotification}
        show={notifymodal}
        onClose={handleNotifyModalClose}
        onAdd={handleAdd}
        onUpdate={handleUpdate}
      />
      <DeleteModal
        title={"Delete Notification ?"}
        desc={
          "Are you sure, you want to delete this Client Call? All the data related to this Client Call will get lost if you delete it."
        }
        show={deleteModal}
        onClose={handleDeleteModalClose}
        onRemove={handleRemove}
      />
      <Header
        title={"Notifications"}
        addBtnTitle={"Create New Notification"}
        handleShow={handleNotifyModalshow}
      />
      {currentNotifictions.map((item, index) => {
        return (
          <NotificationCard
            notification={item}
            key={index}
            onEdit={onEdit}
            onDelete={handleDeleteModalShow}
          />
        );
      })}
      <div className="pagination-wrapper">
        <Pagination
          totelItems={notifications.length}
          itemsPerPage={postsPerPage}
          paginate={paginate}
        />
      </div>
    </div>
  );
};

export default Notification;
