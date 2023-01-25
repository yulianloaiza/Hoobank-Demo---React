import ModalCard from "../../components/ModalCard/ModalCard";
import ProofBanner from "../../components/ProofBanner/ProofBanner";
import "./CTAModal.css";

const CTAModal = () => {
  return (
    <div className="section">
      <ProofBanner />
      <ModalCard className="cta--modal">
        <div className="modal--text">
          <p className="title modal--title"> Let's try our service now!</p>
          <p className="modal--p">
            Everything you need to accept card payments, send invoices and grow
            your business anywhere on the planet.
          </p>
        </div>
        <div className="modal--content">
          <button className="action_button modal--button">Get Started</button>
        </div>
      </ModalCard>
    </div>
  );
};

export default CTAModal;
