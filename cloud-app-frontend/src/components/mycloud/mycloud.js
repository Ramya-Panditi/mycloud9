import React from "react";
import { HashRouter, Routes, Route, Link } from "react-router-dom";
import Sidebar from "../sidebar/sidebar";
import Home from "../home/home";
import Folder from "../Folder/folder";

const MyCloud = () => {
  return (
    <div className=" row d-flex flex-row  justify-content-center m-0 p-0">
      {/* <input type="text" placeholder="Search" className="search-bar" /> */}
      <div className="col-lg-2 col-md-2 col-sm-10 col-10 p-0">
        <Sidebar />
      </div>
      <div className="col-lg-10 col-md-10 col-sm-10 col-10 ">
        <Routes>
          <Route exact path="/home" element={<Home />} />
          <Route exact path = "/folders/:foldername/:folderid" element = {<Folder/>}/> 
        </Routes>
      </div>
    </div>
  );
};
export default MyCloud;
