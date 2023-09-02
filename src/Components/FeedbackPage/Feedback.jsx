import { useState } from "react";
import Pagination from "../Common/Pagination/Pagination";
import Header from "../Common/Header/Header";
import FBCard from "./FeedbackCard/FeedbackCard";
import style from "./feedback.module.css";
import FeedbackModal from "../Modals/FeedbackModal/FeedbackModal";

const Feedback = () => {
  const [feedbackModal, setFeedbackModal] = useState(false);
  const [feedback, setFeedback] = useState([
    {
      id: 1,
      email: "heavyrain@example.com",
      subject: "subject of feedback goes here..",
    },
    {
      id: 2,
      email: "heavyrain@example.com",
      subject: "subject of feedback goes here..",
    },
    {
      id: 3,
      email: "heavyrain@example.com",
      subject: "subject of feedback goes here.",
    },
    {
      id: 4,
      email: "heavyrain@example.com",
      subject: "subject of feedback goes here..",
    },
    {
      id: 5,
      email: "heavyrain@example.com",
      subject: "subject of feedback goes here..",
    },
    {
      id: 6,
      email: "heavyrain@example.com",
      subject: "subject of feedback goes here..",
    },
    {
      id: 7,
      email: "heavyrain@example.com",
      subject: "subject of feedback goes here..",
    },
    {
      id: 8,
      email: "heavyrain@example.com",
      subject: "subject of feedback goes here..",
    },
    {
      id: 9,
      email: "heavyrain@example.com",
      subject: "subject of feedback goes here..",
    },
    {
      id: 10,
      email: "heavyrain@example.com",
      subject: "subject of feedback goes here..",
    },
  ]);

  const handleFeedbackModalShow = () => {
    setFeedbackModal(true);
  };
  const handleFeedbackModalClose = () => {
    setFeedbackModal(false);
  };

  return (
    <div className="content">
      <FeedbackModal show={feedbackModal} onClose={handleFeedbackModalClose} />
      <Header title={"Feedback"} />
      <div className={style.header_txt}>
        <p>EMAIL</p>
        <p>SUBJECT</p>
        <p>ACTION</p>
      </div>
      {feedback.map((item) => {
        return (
          <FBCard
            feedback={item}
            key={item.id}
            onShow={handleFeedbackModalShow}
          />
        );
      })}
      <div className="pagination-wrapper">
        <Pagination />
      </div>
    </div>
  );
};

export default Feedback;
