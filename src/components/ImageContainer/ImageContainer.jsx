import React from "react";
import "./ImageContainer.css";

function ImageContainer(props) {
  return (
    <div className="img-container">
      <img className="nested-img" src={props.src} alt={props.alt} />
    </div>
  );
}

export default ImageContainer;
