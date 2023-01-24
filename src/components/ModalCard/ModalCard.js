import React from "react";
import "./ModalCard.css";

const ModalCard = (props) => {
  const classes = "modal--card " + props.className;
  return <div className={classes}>{props.children}</div>;
};

export default ModalCard;
