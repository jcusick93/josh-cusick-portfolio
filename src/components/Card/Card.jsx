import React from "react";
import "./Card.css";
import { Badge } from "../Badge/Badge";
import Image from "../Image/Image";
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
      <Image height="24vh" image={props.image} />
      <div className="card-title">
        <h1>{props.title}</h1>
        <span>{props.content}</span>
      </div>
    </NavLink>
  );
}

export { Card };
