import React from "react";
import "./Card.css";
import { Badge } from "../Badge/Badge";
import BlurImage from "../BlurImage/BlurImage";
import { NavLink } from "react-router-dom";

function Card(props) {
  return (
    <NavLink to="/compass-design-system" className="card">
      {props.children}

      <Badge
        styleName={props.styleName}
        margin={16}
        badgeText={props.badgeText}
      />
      <div className="image-container">
        <BlurImage
          height="24vh"
          src={props.src}
          alt={props.alt}
          base64={props.base64}
        />
      </div>
      <div className="card-text-container">
        <h1>{props.title}</h1>
        <span>{props.content}</span>
      </div>
    </NavLink>
  );
}

export { Card };
