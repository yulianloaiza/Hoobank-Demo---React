import { discount } from "../../assets";
import "./InlinePromo.css";

const InlinePromo = (props) => {
  return (
    <div className="inlinePromo--container">
      <p className="inlinePromo--p">
        <span className="discount">
          <img src={discount} alt="Discount symbol"></img>
        </span>
        <span className="inlinePromo--highlight">20%&nbsp;</span> Discount
        for&nbsp;
      </p>

      <p className="inlinePromo--p inlinePromo--bottom">
        <span className="inlinePromo--highlight">1 month&nbsp;</span>account
      </p>
    </div>
  );
};

export default InlinePromo;
