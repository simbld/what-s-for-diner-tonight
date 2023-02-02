import PropTypes from "prop-types";

function Card({ mealName, foodImage, handlePage }) {
  return (
    <figure className="card" onClick={handlePage} aria-hidden="true">
      <img className="cardstyle" src={foodImage} alt={mealName} />
      <figcaption className="titlemeal"> {mealName}</figcaption>
    </figure>
  );
}

Card.propTypes = {
  mealName: PropTypes.string.isRequired,
  foodImage: PropTypes.string.isRequired,
  handlePage: PropTypes.func.isRequired,
};

export default Card;
