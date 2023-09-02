import { useState } from "react";
import FilterDropdown from "../Common/DropDown/FilterDropdown";
import Header from "../Common/Header/Header";
import Pagination from "../Common/Pagination/Pagination";
import ClientModal from "../Modals/ClientModal/ClientModal";
import DeleteModal from "../Modals/DeleteModal/DeleteModal";
import ClientCard from "./ClientCard/ClientCard";

const Client = () => {
  const [clientModal, setClientModal] = useState(false);
  const [deleteModal, setDeleteModal] = useState(false);
  const [updateClient, setUpdateClient] = useState({});
  const [clientToRemove, setClientToRemove] = useState({});
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(10);

  const [clientCalls, setClientCalls] = useState([
    {
      id: 1,
      title: "China 2020 RMB Outlook_ Jan 2020",
      date: "2019-06-01",
      summary:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis...",
      category: "Politics",
      file: "China_outlook.mp3",
    },
    {
      id: 2,
      title: "China 2020 RMB Outlook_ Jan 2020",
      date: "2019-06-01",
      summary:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis...",
      category: "Politics",
      file: "China_outlook.mp3",
    },
    {
      id: 3,
      title: "China 2020 RMB Outlook_ Jan 2020",
      date: "2019-06-01",
      summary:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis...",
      category: "Commodities",
      file: "China_outlook.mp3",
    },
    {
      id: 4,
      title: "China 2020 RMB Outlook_ Jan 2020",
      date: "2019-07-01",
      summary:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis...",
      category: "Politics",
      file: "China_outlook.mp3",
    },
    {
      id: 5,
      title: "China 2020 RMB Outlook_ Jan 2020",
      date: "2019-06-01",
      summary:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis...",
      category: "Politics",
      file: "China_outlook.mp3",
    },
    {
      id: 6,
      title: "China 2020 RMB Outlook_ Jan 2020",
      date: "2019-06-01",
      summary:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis...",
      category: "Politics",
      file: "China_outlook.mp3",
    },
    {
      id: 7,
      title: "China 2020 RMB Outlook_ Jan 2020",
      date: "2019-06-01",
      summary:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis...",
      category: "Politics",
      file: "China_outlook.mp3",
    },
    {
      id: 8,
      title: "China 2020 RMB Outlook_ Jan 2020",
      date: "2019-06-01",
      summary:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis...",
      category: "Politics",
      file: "China_outlook.mp3",
    },
    {
      id: 9,
      title: "China 2020 RMB Outlook_ Jan 2020",
      date: "2019-06-01",
      summary:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis...",
      category: "Rate",
      file: "China_outlook.mp3",
    },
    {
      id: 10,
      title: "China 2020 RMB Outlook_ Jan 2020",
      date: "2019-06-01",
      summary:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis...",
      category: "Rate",
      file: "China_outlook.mp3",
    },
  ]);

  const handleClientModalShow = () => setClientModal(true);
  const handleClientModalClose = () => setClientModal(false);

  const handleAdd = (clientCall) => {
    const data = [clientCall, ...clientCalls];
    setClientCalls(data);
    setClientModal(false);
  };
  const handleUpdate = (clientCall) => {
    const index = clientCalls.findIndex((item) => item.id === clientCall.id);
    const data = [...clientCalls];
    data[index] = { ...clientCall, isUpdate: false };
    setClientCalls(data);
    setClientModal(false);
  };

  const onEdit = (clientCall) => {
    handleClientModalShow();
    setUpdateClient({ ...clientCall, isUpdate: true });
  };

  const handleRemove = () => {
    const clone = [...clientCalls];
    const Updated = clone.filter((item) => item.id !== clientToRemove.id);
    setClientCalls(Updated);
    setDeleteModal(false);
  };
  const handleDeleteModalShow = (clientCall) => {
    setDeleteModal(true);
    setClientToRemove(clientCall);
  };
  const handleDeleteModalClose = () => setDeleteModal(false);

  // Get current Articles
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentClientCalls = clientCalls.slice(
    indexOfFirstPost,
    indexOfLastPost
  );

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  return (
    <div className="content">
      <ClientModal
        show={clientModal}
        onClose={handleClientModalClose}
        clientCall={updateClient}
        onAdd={handleAdd}
        onUpdate={handleUpdate}
        onDelete={handleDeleteModalShow}
      />
      <DeleteModal
        title={"Delete Client Call?"}
        desc={
          "Are you sure, you want to delete this Client Call? All the data related to this Client Call will get lost if you delete it."
        }
        show={deleteModal}
        onClose={handleDeleteModalClose}
        onRemove={handleRemove}
      />
      <Header
        title={"List Of Client Calls"}
        search={true}
        filterBtn={true}
        addBtnTitle={"Publish Client Call"}
        handleShow={handleClientModalShow}
        filterDropdown={<FilterDropdown />}
      />
      <div className="card_container">
        {currentClientCalls.map((item, index) => {
          return <ClientCard clientCall={item} key={index} onEdit={onEdit} />;
        })}
      </div>
      <div className="pagination-wrapper">
        <Pagination
          totelItems={clientCalls.length}
          itemsPerPage={postsPerPage}
          paginate={paginate}
        />
      </div>
    </div>
  );
};

export default Client;
