import React from "react";
import "./Card.css";
import { Badge } from "../Badge/Badge";
import Image from "../Image/Image";

function Card(props) {
  return (
    <div className="card">
      {props.children}
      <Badge varient="website" margin={16} badgeText={props.badgeText} />
      <Image height="32vh" image={props.image} />
      <div className="card-title">
        <h1>{props.title}</h1>
        <span>{props.content}</span> <br /> <br />
        <a className="card-link" href="./">
          {props.link} →
        </a>
      </div>
    </div>
  );
}

export { Card };
