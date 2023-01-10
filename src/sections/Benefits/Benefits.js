import { features } from "../../constants";
import Button from "../../components/Button/Button";
import ContentCard from "../../components/ContentCard/ContentCard";
import "./Benefits.css";

const Benefits = () => {
  return (
    <div className="section">
      <div className="benefits--text">
        <p className="title"> You do the business, we'll handle the money. </p>
        <p className="subtitle">
          With the right credit card, you can improve your financial life by
          building credit, earning rewards and saving money. We're different
          from the hundreds of credit cards on the market.
        </p>
        <Button text="Get Started" />
      </div>
      <div className="benefits--content">
        {features.map((item) => (
          <ContentCard
            image={item.image}
            alt={item.alt}
            title={item.title}
            description={item.description}
            key={item.id}
          />
        ))}
      </div>
    </div>
  );
};

export default Benefits;
