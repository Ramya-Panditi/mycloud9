import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./sidebar.css";

const Sidebar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };
  return (
    <div>
      <div>
        <nav className="navbar d-block d-md-none navbar-light ">
          <button
            className="navbar-toggler"
            type="button"
            onClick={toggleSidebar}
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className={`collapse navbar-collapse rounded px-1  ${
              sidebarOpen ? "show" : ""
            }`}
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <Link className="sidenav-link nav-link" to="/mycloud/home">
                  My Cloud
                </Link>
              </li>
              <li className="nav-item">
                <Link className="sidenav-link nav-link" to="/mycloud/folders">
                  Folders
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="sidenav-link nav-link"
                  to="/mycloud/favourites"
                >
                  Favourites
                </Link>
              </li>
              <li className="nav-item">
                <Link className="sidenav-link nav-link" to="/mycloud/settings">
                  Settings
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
      <div className="sidenav-container d-md-flex d-none justify-content-between flex-column  p-2">
        <div>
          <div className="d-flex justify-content-center my-4">
            <img
              className="img rounded-circle profile"
              src="https://res.cloudinary.com/dzlvcxhuo/image/upload/v1717664492/My_doodle_pic_puxhod.png"
              alt="hhuhuh"
            />
          </div>
          <ul className="list-group">
            <Link className="sidenav-link" to="/mycloud/home">
              <li className="d-flex flex-row">
                <i class="fa-solid fa-cloud  mt-1 mx-2"></i>
                <p>My Cloud</p>
              </li>
            </Link>
            <Link className="sidenav-link" to="/mycloud/favourites">
              <li className="d-flex flex-row">
                <i class="fa-solid fa-folder mt-1 mx-2"></i>
                <p>Folders</p>
              </li>
            </Link>
            <Link className="sidenav-link" to="/mycloud/favourites">
              <li className="d-flex flex-row ">
                <i class="fa-solid fa-heart mt-1 mx-2"></i>
                <p>Favourites</p>
              </li>
            </Link>
            <Link className="sidenav-link" to="/mycloud/favourites">
              <li className="d-flex flex-row">
                <i class="fa-solid fa-cloud mt-1 mx-2"></i>
                <p>Favourites</p>
              </li>
            </Link>
          </ul>
        </div>
        <div className="sidenav-footer">
          <ul className="list-group">
            <Link className="sidenav-link" to="/mycloud/home">
              <li className="d-flex flex-row">
                <i class="fa-solid fa-gear mt-1 mx-2"></i>
                <p>Settings</p>
              </li>
            </Link>
            <Link className="sidenav-link" to="/mycloud/favourites">
              <li className="d-flex flex-row">
                <i class="fa-solid fa-right-from-bracket mt-1 mx-2"></i>
                <p>Logout</p>
              </li>
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
};
export default Sidebar;
