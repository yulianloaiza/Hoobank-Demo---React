import { bill, apple, google } from "../../assets";
import "./Usage.css";

const Usage = () => {
  return (
    <div className="section flex--lg">
      <div className="usage--content">
        <img src={bill} className="usage--img" alt="Billing example"></img>
      </div>

      <div className="responsive--text">
        <p className="title"> Easily control your billing & invoicing. </p>
        <p className="subtitle">
          Sending invoices or checking your expenses has never been easier. Our
          multi-platform solution has been built from the ground-up with
          simplicity mind.
        </p>
        <div className="usage--platforms">
          <img src={apple} className="usage__platforms--appleImg" alt="Apple platform" />
          <img src={google} className="usage__platforms--googleImg" alt="Google platform" />
        </div>
      </div>
    </div>
  );
};

export default Usage;
