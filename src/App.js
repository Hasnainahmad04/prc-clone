import React, { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import SideBar from "./Components/Common/Layout/Sidebar";
import "./App.css";

const UserList = lazy(() => import("./Components/UserPage/UserList"));
const Article = lazy(() => import("./Components/ArticlePage/Article"));
const Podcast = lazy(() => import("./Components/PodcastPage/Podcast"));
const Client = lazy(() => import("./Components/ClientCallPage/Client"));
const Feedback = lazy(() => import("./Components/FeedbackPage/Feedback"));
const Notification = lazy(() =>
  import("./Components/NotificationPage/Notification")
);
const Profile = lazy(() => import("./Components/ProfilePage/Profile"));

function App() {
  return (
    <>
      <SideBar />
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<UserList />} />
          <Route path="/articles" element={<Article />} />
          <Route path="/podcasts" element={<Podcast />} />
          <Route path="/client" element={<Client />} />
          <Route path="/feedback" element={<Feedback />} />
          <Route path="/notification" element={<Notification />} />
          {/* <Route path="/analytics" />*/}
          <Route path="profile" element={<Profile />} />
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
