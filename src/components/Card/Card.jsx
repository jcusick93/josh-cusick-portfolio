import React from "react";
import { NavLink } from "react-router-dom";
import "./Card.css";
import { Badge } from "../Badge/Badge";
import Image from "../Image/Image";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

function Card(props) {
  return (
    <SkeletonTheme
      color="var(--skeleton-background)"
      highlightColor="var(--skeleton-highlight)"
    >
      <div className="card">
        {props.children}

        <Badge varient="website" margin={16} badgeText={props.badgeText} />

        <Image height="32vh" image={props.image} />
        {/* <Skeleton height="32vh" /> */}
        <div className="card-title">
          <h1>{props.title || <Skeleton width={140} />}</h1>
          <span>{props.content || <Skeleton />}</span> <br /> <br />
          {/* <Skeleton float="left" width={120} /> */}
          <NavLink className="card-link" to="./compass-design-system">
            {props.linkText} →
          </NavLink>
        </div>
      </div>
    </SkeletonTheme>
  );
}

export { Card };
