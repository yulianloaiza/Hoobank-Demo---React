import React from "react";
import ModalCard from "../../components/ModalCard/ModalCard";
import ProofBanner from "../../components/ProofBanner/ProofBanner";
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
      <ProofBanner />
      <ModalCard className= 'testimonials--modal'>
        <div className="modal--text"> 
          <p className="title modal--title"> Let's try our service now!</p>
          <p className="modal--p"> Everything you need to accept card payments, send invoices and grow your business anywhere on the planet. </p>        
        </div>
        <div className="modal--content">
          <button className="action_button modal--button">Get Started</button>
        </div>        
      </ModalCard>
    </div>
  );
};

export default Testimonials;
