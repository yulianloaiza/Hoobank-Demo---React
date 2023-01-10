import "./ContentCard.css";
const ContentCard = (props) => {
  return (
    <div className="contentCard--divider">
      <div className="contentCard__img--bg">
        <img
          src={props.image}
          alt={props.alt}
          className="contentCard--img"
        ></img>
      </div>

      <div className="contentCard--text">
        <p className="contentCard--title">{props.title}</p>
        <p style={{ marginTop: "0.2rem" }}>{props.description}</p>
      </div>
    </div>
  );
};

export default ContentCard;
