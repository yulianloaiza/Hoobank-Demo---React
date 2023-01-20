import React from "react";
import { quotes } from "../../assets";
import "./Testimonial.css";

const Testimonial = ({ text, picture, name, title }) => {
  return (
    <div className="testimonial--card">
      <img src={quotes} alt="quotes" />
      <p className="testimonial--text"> {text} </p>
      <div className="testimonial--author">
        <img src={picture} alt="Author" className="testimonial--picture" />

        <div className="testimonial--authorText">
          <p className="testimonial--name">{name}</p>
          <p className="testimonial--authorTitle">{title}</p>{" "}
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
