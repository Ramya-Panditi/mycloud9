import React,{useState} from "react";
import {useParams} from "react-router-dom"
import "./folder.css";

const Folder = () => {

  const {foldername,folderid} = useParams();
  const images = [
    "https://via.placeholder.com/300",
    "https://via.placeholder.com/300",
    "https://via.placeholder.com/300",
    "https://via.placeholder.com/300",
    "https://via.placeholder.com/300",
    "https://via.placeholder.com/300",
  ];

  return (
    <div className="folder">
      {/* <h1 className="folder-title">{title}</h1> */}
      <h1 className="folder-title">{foldername}</h1>

      <div className="folder-images">
        {images.map((image, index) => (
          <div className="folder-image-wrapper" key={index}>
            <img src={image} alt={`image-${index}`} className="folder-image" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Folder;
