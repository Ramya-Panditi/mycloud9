// src/Home.js
import React, { useState } from "react";
import "./home.css";
// import Aws from "../../aws";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";
import axios from "axios";
import { baseUrl } from "../../links";
import { Button, Modal } from "react-bootstrap";
// import {config} from 'dotenv';

const Home = () => {
  const [file, setFiles] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [showModal2, setShowModal2] = useState(false);

  const [selectedFolder, setSelectedFolder] = useState("");
  const [selectedFolder2, setSelectedFolder2] = useState("");

  const notify = () => toast("Upload some files to upload!");

  const config = {
    bucketName: "cloud-management-project-89189803",
    region: "ap-south-1",
    accessKeyId: process.env.accessKey,
    secretAccessKey: process.env.secretAccessKey,
  };

  const [categories, setCategories] = useState([
    { name: "Pictures", icon: "bi bi-image-fill logo-style" },
    { name: "Audios", icon: "bi bi-mic-fill logo-style" },
    { name: "Documents", icon: "bi bi-file-earmark-fill logo-style" },
    { name: "Videos", icon: "bi bi-camera-video-fill logo-style" },
  ]);

  const [folders, setFolders] = useState([
    { id: 1, name: "Personal", icon: "bi bi-folder-fill logo-style" },
    { id: 2, name: "Work", icon: "bi bi-folder-fill logo-style" },
    { id: 3, name: "Family", icon: "bi bi-folder-fill logo-style" },
    { id: 4, name: "Friends", icon: "bi bi-folder-fill logo-style" },
  ]);

  
  const handleFileUpload = async () => {
    setShowModal(false);
    const s3Client = new S3Client({
      region: config.region,
      credentials: {
        accessKeyId: config.accessKeyId,
        secretAccessKey: config.secretAccessKey,
      },
    });

    if (file.length === 0) {
      notify();
      return;
    }

    for (let i = 0; i < file.length; i++) {
      const uploadParams = {
        Bucket: config.bucketName,
        Key: file[i].name,
        Body: file[i],
      };
      try {
        const data = await s3Client.send(new PutObjectCommand(uploadParams));
        const fileUrl = `https://${config.bucketName}.s3.${config.region}.amazonaws.com/${file[i].name}`;
        const id = localStorage.getItem(id);
        const details = {
          file_name: file[i].name,
          file_size: file[i].size,
          file_type: file[i].type,
          file_lastmodifieddate: file[i].lastModifiedDate,
          file_url: fileUrl,
        };
        await axios.post(`${baseUrl}/upload/${id}`, details);
      } catch (err) {
        console.error("Error", err);
      }
    }
  };

  const handleChange = (e) => {
    setFiles(e.target.files);
  };
  const createFolder = () => {
    setShowModal2(true);
    console.log("Folder creation process started");
  };
  const createFolderFinal = (e) => {
    
  };
  const addFolder = (name) => {
    const parent_folder_id = 1;
    //call an api to insert the foldet into db with parent_folder_id as 1 (home page folder)
    console.log(selectedFolder2);
    const newFolder = {
      id: folders.length + 1,
      name,
      icon: "bi bi-folder-fill logo-style",
    };
    setFolders([...folders, newFolder]);
    // {id: folders.length+1 , name: {selectedFolder2}, icon:"bi bi-folder-fill logo-style",}
  };

  return (
    <div className="d-flex flex-row">
      <div className="middle-bar">
        <input type="text" placeholder="Search" className="search-bar" />
        <h5 className="categories-head">Categories</h5>
        <div className="container-fluid">
          <div className="categories ps-3 row">
            {categories.map((category) => (
              <div className="cat-card col-12">
                <div className="cat-card-logo p-2 pt-3">
                  <i className={category.icon}></i>
                </div>
                <div className="cat-card-text p-2 mt-auto">
                  <h6>{category.name}</h6>
                  <p className="cat-para">480 files</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <h5 className="categories-head">Recent folders</h5>
        <div className="container-fluid">
          <div className="categories ps-3 row">
            {folders.map((folder) => (
              <div className="cat-card2 col-12">
                <Link
                  className="text-decoration-none"
                  to={`/folders/${folder.name}/${folder.id}`}
                >
                  <div className="cat-card-logo p-2 pt-3">
                    <i class={folder.icon}></i>
                  </div>
                  <div className="cat-card-text2 p-2 mt-auto">
                    <h6 className="cat-card-text3">{folder.name}</h6>
                    <p className="cat-para">480 files</p>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>

        <h5 className="categories-head d-none d-md-block mt-3">Recent files</h5>
        <div className="container-fluid d-none d-md-block">
          <div className="row cards-wrap">
            <div className="col-12 mb-3 pt-auto pb-auto recent-file-card w-75 d-flex flex-row justify-content-center">
              <div className="cat-card-logo ms-auto me-auto d-flex flex-row">
                <i class="bi bi-image-fill logo-style"></i>
                <h6 className="ms-4 mt-auto mb-auto">IMG_10018</h6>
              </div>
              <p className="ms-auto me-auto mt-auto mb-auto text-secondary">
                PNG File
              </p>
              <p className="ms-auto me-auto mt-auto mb-auto text-secondary">
                5 MB
              </p>
              <i class="bi bi-share-fill logo-style ms-auto me-auto"></i>
              <i class="bi bi-three-dots logo-style ms-auto me-auto"></i>
            </div>
            <div className="col-12 mb-3 pt-auto pb-auto recent-file-card w-75 d-flex flex-row justify-content-center">
              <div className="cat-card-logo ms-auto me-auto d-flex flex-row">
                <i class="bi bi-image-fill logo-style"></i>
                <h6 className="ms-4 mt-auto mb-auto">IMG_10018</h6>
              </div>
              <p className="ms-auto me-auto mt-auto mb-auto text-secondary">
                PNG File
              </p>
              <p className="ms-auto me-auto mt-auto mb-auto text-secondary">
                5 MB
              </p>
              <i class="bi bi-share-fill logo-style ms-auto me-auto"></i>
              <i class="bi bi-three-dots logo-style ms-auto me-auto"></i>
            </div>
            <div className="col-12 mb-3 pt-auto pb-auto recent-file-card w-75 d-flex flex-row justify-content-center">
              <div className="cat-card-logo ms-auto me-auto d-flex flex-row">
                <i class="bi bi-image-fill logo-style"></i>
                <h6 className="ms-4 mt-auto mb-auto">IMG_10018</h6>
              </div>
              <p className="ms-auto me-auto mt-auto mb-auto text-secondary">
                PNG File
              </p>
              <p className="ms-auto me-auto mt-auto mb-auto text-secondary">
                5 MB
              </p>
              <i class="bi bi-share-fill logo-style ms-auto me-auto"></i>
              <i class="bi bi-three-dots logo-style ms-auto me-auto"></i>
            </div>
          </div>
        </div>
      </div>
      <div className="m-2 mt-5 right-side-bar px-3 text-center">
        <button className="btn btn-success m-3" onClick={() => createFolder()}>
          Create Folder +
        </button>
        <input
          className="btn btn-primary upload-button input"
          name="Upload"
          type="file"
          multiple
          onChange={handleChange}
        />
        <Button
          className="btn mt-3 btn-dark"
          onClick={() => setShowModal(true)}
        >
          Upload
        </Button>
        <br />

        <ToastContainer
          position="top-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
          transition="bounce"
        />
        <Modal show={showModal} onHide={() => setShowModal(false)}>
          <Modal.Header closeButton>
            <Modal.Title>Select Folder</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <input
              type="text"
              placeholder="Enter folder name"
              value={selectedFolder}
              onChange={(e) => setSelectedFolder(e.target.value)}
              className="form-control"
            />
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={() => setShowModal(false)}>
              Cancel
            </Button>
            <Button variant="primary" onClick={handleFileUpload}>
              Upload
            </Button>
          </Modal.Footer>
        </Modal>
        <Modal show={showModal2} onHide={() => setShowModal2(false)}>
          <Modal.Header closeButton>
            <Modal.Title>Folder Name</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <input
              type="text"
              placeholder="Enter folder name"
              value={selectedFolder2}
              onChange={(e) => setSelectedFolder2(e.target.value)}
              className="form-control"
            />
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={() => setShowModal2(false)}>
              Cancel
            </Button>
            <Button variant="primary" onClick={createFolderFinal}>
              Create
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </div>
  );
};

export default Home;
