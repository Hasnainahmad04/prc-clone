import { useState } from "react";
import FilterDropdown from "../Common/DropDown/FilterDropdown";
import Header from "../Common/Header/Header";
import Pagination from "../Common/Pagination/Pagination";
import ArticleModal from "../Modals/ArticleModal/ArticleModal";
import DeleteModal from "../Modals/DeleteModal/DeleteModal";
import ArticleCard from "./ArticleCard/ArticleCard";

const Article = () => {
  const [addArticleModal, setAddArticleModal] = useState(false);
  const [deleteModal, setDeleteModal] = useState(false);
  const [updateArticle, setUpdateArticle] = useState({});
  const [articleToRemove, setArticleToRemove] = useState({});
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(10);
  const [articles, setArticles] = useState([
    {
      id: 1,
      title: "China 2020 RMB Outlook_ Jan 2020",
      date: "2017-06-01",
      summary:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis...",
      category: "Presentations",

      file: "China_outlook.pdf",
    },
    {
      id: 2,
      title: "China 2020 RMB Outlook_ Jan 2020",
      date: "2017-06-01",
      summary:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis...",
      category: "Presentations",

      file: "China_outlook.pdf",
    },
    {
      id: 3,
      title: "China 2020 RMB Outlook_ Jan 2020",
      date: "2017-06-01",
      summary:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis...",
      category: "Rates",

      file: "China_outlook.pdf",
    },
    {
      id: 4,
      title: "China 2020 RMB Outlook_ Jan 2020",
      date: "2017-06-01",
      summary:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis...",
      category: "Rates",

      file: "China_outlook.pdf",
    },
    {
      id: 5,
      title: "China 2020 RMB Outlook_ Jan 2020",
      date: "2017-06-01",
      summary:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis...",
      category: "Politics",

      file: "China_outlook.pdf",
    },
    {
      id: 6,
      title: "China 2020 RMB Outlook_ Jan 2020",
      date: "2017-06-01",
      summary:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis...",
      category: "Politics",

      file: "China_outlook.pdf",
    },
    {
      id: 7,
      title: "China 2020 RMB Outlook_ Jan 2020",
      date: "2017-06-01",
      summary:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis...",
      category: "Equities",
      file: "China_outlook.pdf",
    },
    {
      id: 8,
      title: "China 2020 RMB Outlook_ Jan 2020",
      date: "2017-06-01",
      summary:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis...",
      category: "Politics",

      file: "China_outlook.pdf",
    },
    {
      id: 9,
      title: "China 2020 RMB Outlook_ Jan 2020",
      date: "2017-06-01",
      summary:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis...",
      category: "Equities",

      file: "China_outlook.pdf",
    },
    {
      id: 10,
      title: "China 2020 RMB Outlook_ Jan 2020",
      date: "2017-06-01",
      summary:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis...",
      category: "Politics",

      file: "China_outlook.pdf",
    },
  ]);
  const handleDeleteModalShow = (article) => {
    setDeleteModal(true);
    setArticleToRemove(article);
  };

  const handleDeleteModalClose = () => {
    return setDeleteModal(false);
  };

  const handleAddArticleShow = () => {
    setAddArticleModal(true);
  };

  const handleArticleModalClose = () => {
    setAddArticleModal(false);
  };

  const handleAdd = (article) => {
    const data = [article, ...articles];
    setArticles(data);
    setAddArticleModal(false);
  };

  const handleUpdate = (article) => {
    const index = articles.findIndex((item) => item.id === article.id);
    const data = [...articles];
    data[index] = { ...article, isUpdate: false };
    setArticles(data);
    setAddArticleModal(false);
  };
  const handleRemove = () => {
    const clone = [...articles];
    const Updated = clone.filter((item) => item.id !== articleToRemove.id);
    setArticles(Updated);
    setDeleteModal(false);
  };
  const onEdit = (article) => {
    handleAddArticleShow();
    setUpdateArticle({ ...article, isUpdate: true });
  };

  // Get current Articles
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentArticles = articles.slice(indexOfFirstPost, indexOfLastPost);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  return (
    <>
      <DeleteModal
        title={"Delete Article?"}
        desc={
          "Are you sure, you want to delete this article? All the data related to this article will get lost if you delete it."
        }
        show={deleteModal}
        onClose={handleDeleteModalClose}
        onRemove={handleRemove}
      />
      <ArticleModal
        onClose={handleArticleModalClose}
        onAdd={handleAdd}
        onUpdate={handleUpdate}
        show={addArticleModal}
        article={updateArticle}
      />
      <div className="content">
        <div>
          <Header
            title={"List Of Article"}
            addBtnTitle={"Publish Article"}
            filterBtn={true}
            search={true}
            handleShow={handleAddArticleShow}
            filterDropdown={<FilterDropdown />}
          />
          <div className="card_container">
            {currentArticles.map((item, index) => {
              return (
                <ArticleCard
                  article={item}
                  key={index}
                  onEdit={onEdit}
                  onDelete={handleDeleteModalShow}
                />
              );
            })}
          </div>
        </div>
        <div className="pagination-wrapper">
          <Pagination
            totelItems={articles.length}
            itemsPerPage={postsPerPage}
            paginate={paginate}
          />
        </div>
      </div>
    </>
  );
};

export default Article;
