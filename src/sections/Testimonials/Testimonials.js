import React from "react";
import Testimonial from "../../components/Testimonial/Testimonial";
import { testimonials } from "../../constants";
import "./Testimonials.css";

const Testimonials = () => {
  return (
    <div className="section">
      <div className="testimonials--text">
        <p className="title testimonials--title">
          Here's what people are saying about us
        </p>
        <p className="testimonials--intro">
          We're proud that customers and companies from all over the world trust
          our services.
        </p>
      </div>

      <div className="testimonials--content">
        {testimonials.map((item) => (
          <Testimonial
            key={item.id}
            text={item.text}
            picture={item.picture}
            name={item.name}
            title={item.title}
          />
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
