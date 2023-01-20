import React from "react";
import { airbnb, binance, coinbase, dropbox } from "../../assets";
import "./ProofBanner.css";

const ProofBanner = () => {
  //   Would normally have an array of images and map through them,
  //   but the resolution and positining of each is different, so we have
  //   to adjust for that in our css individually

  return (
    <div className="proofBanner--list">
      <img src={airbnb} className="proofBanner--img airbnb" alt="Company logo" />
      <img src={binance} className="proofBanner--img binance" alt="Company logo" />
      <img src={coinbase} className="proofBanner--img coinbase" alt="Company logo" />
      <img src={dropbox} className="proofBanner--img dropbox" alt="Company logo" />
    </div>
  );
};

export default ProofBanner;
