import "../css/Card.css";

const Card = ({ image, name, desc, price }) => {
  return (
    <div className="card">
      <img src={image} alt="" width="200px" />
      <div className="details">
        <div className="name-price">
          <h3>{name}</h3>
          <h3>£{price}</h3>
        </div>
        <div className="desc">
          <p>{desc}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
