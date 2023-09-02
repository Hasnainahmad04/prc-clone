import React from "react";
import { NavLink } from "react-router-dom";
import style from "./sideBar.module.css";
import { FaUser, FaPhoneAlt, FaMicrophone, FaBell } from "react-icons/fa";
import { RiMessage3Fill, RiSettings4Fill } from "react-icons/ri";
import { MdArticle } from "react-icons/md";
import { TbBrandGoogleAnalytics } from "react-icons/tb";

const SideBar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-md bg-dark p-0">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#navbarOffcanvasLg"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className={`offcanvas offcanvas-start ${style.offCanvas_bg} `}
          id="navbarOffcanvasLg"
        >
          <div className={`${style.offCanvas_bg} offcanvas-header text-white`}>
            <h5 className="offcanvas-title " id="offcanvasDarkNavbarLabel">
              NavBar
            </h5>
            <button
              type="button"
              className="btn-close btn-close-white"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>
          <div className={style.sidebar}>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? style.active : undefined
              }
            >
              <FaUser className="mx-2" />
              LIST OF USERS
            </NavLink>
            <NavLink
              to="/articles"
              className={({ isActive }) =>
                isActive ? style.active : undefined
              }
            >
              <MdArticle className="mx-2" />
              LIST OF ARTICLES
            </NavLink>
            <NavLink
              to="/podcasts"
              className={({ isActive }) =>
                isActive ? style.active : undefined
              }
            >
              <FaMicrophone className="mx-2" />
              LIST OF PODCASTS
            </NavLink>
            <NavLink
              to="/client"
              className={({ isActive }) =>
                isActive ? style.active : undefined
              }
            >
              <FaPhoneAlt className="mx-2" />
              LIST OF CLIENT CALLS
            </NavLink>
            <NavLink
              to="/feedback"
              className={({ isActive }) =>
                isActive ? style.active : undefined
              }
            >
              <RiMessage3Fill className="mx-2" />
              FEEDBACK
            </NavLink>
            <NavLink
              to="analytics"
              className={({ isActive }) =>
                isActive ? style.active : undefined
              }
            >
              <TbBrandGoogleAnalytics className="mx-2" />
              ANALYTICS
            </NavLink>
            <NavLink
              to="notification"
              className={({ isActive }) =>
                isActive ? style.active : undefined
              }
            >
              <FaBell className="mx-2" />
              NOTIFICATIONS
            </NavLink>
            <NavLink
              to="profile"
              className={({ isActive }) =>
                isActive ? style.active : undefined
              }
            >
              <RiSettings4Fill className="mx-2" />
              ACCOUNT & SETTINGS
            </NavLink>
          </div>
        </div>
      </nav>
    </>
  );
};

export default SideBar;
