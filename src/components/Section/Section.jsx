import React from "react";
import "./Section.css";

const Section = (props) => (
  <section className="section">{props.children}</section>
);

export default Section;
