import { useState } from "react";
import Header from "../Common/Header/Header";
import Pagination from "../Common/Pagination/Pagination";
import DeleteModal from "../Modals/DeleteModal/DeleteModal";
import PodcastModal from "../Modals/PodcastModal/PodcastModal";
import PodcastCard from "./podcastCard/PodcastCard";

const Podcast = () => {
  const [podcastmodal, setPodcastModal] = useState(false);
  const [deleteModal, setDeleteModal] = useState(false);
  const [updatePodcast, setUpdatePodcast] = useState({});
  const [podcastToRemove, setPodcastToRemove] = useState({});
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(10);

  const [podcasts, setPodcasts] = useState([
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

  const handlePodcastModalShow = () => {
    setPodcastModal(true);
  };

  const handlePodcastModalClose = () => {
    setPodcastModal(false);
  };
  const handleDeleteModalShow = (article) => {
    setDeleteModal(true);
    setPodcastToRemove(article);
  };

  const handleDeleteModalClose = () => {
    return setDeleteModal(false);
  };

  const handleAdd = (podcast) => {
    const data = [podcast, ...podcasts];
    setPodcasts(data);
    setPodcastModal(false);
  };
  const handleUpdate = (podcast) => {
    const index = podcasts.findIndex((item) => item.id === podcast.id);
    const data = [...podcasts];
    data[index] = { ...podcast, isUpdate: false };
    setPodcasts(data);
    setPodcastModal(false);
  };

  const onEdit = (podcast) => {
    handlePodcastModalShow();
    setUpdatePodcast({ ...podcast, isUpdate: true });
  };

  const handleRemove = () => {
    const clone = [...podcasts];
    const Updated = clone.filter((item) => item.id !== podcastToRemove.id);
    setPodcasts(Updated);
    setDeleteModal(false);
  };

  // Get current Articles
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentClientCalls = podcasts.slice(indexOfFirstPost, indexOfLastPost);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  return (
    <>
      <PodcastModal
        show={podcastmodal}
        onClose={handlePodcastModalClose}
        onAdd={handleAdd}
        podcast={updatePodcast}
        onUpdate={handleUpdate}
        onDelete={handleDeleteModalShow}
      />
      <DeleteModal
        title={"Delete Podcast?"}
        desc={
          "Are you sure, you want to delete this Podcast? All the data related to this Podcast will get lost if you delete it."
        }
        show={deleteModal}
        onClose={handleDeleteModalClose}
        onRemove={handleRemove}
      />
      <div className="content">
        <Header
          title={"List Of Podcasts"}
          addBtnTitle={"Publish Podcast"}
          handleShow={handlePodcastModalShow}
          search={true}
          filterBtn={true}
        />
        <div className="card_container">
          {podcasts.map((item, index) => {
            return <PodcastCard podcast={item} key={index} onEdit={onEdit} />;
          })}
        </div>
        <div className="pagination-wrapper">
          <Pagination
            itemsPerPage={postsPerPage}
            totelItems={podcasts.length}
            paginate={paginate}
          />
        </div>
      </div>
    </>
  );
};

export default Podcast;
