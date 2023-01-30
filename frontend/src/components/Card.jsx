import PropTypes from "prop-types";

function Card({ mealName, image, handlePage }) {
  return (
    <figure className="card" onClick={handlePage} aria-hidden="true">
      <img className="cardstyle" src={image} alt={mealName} />
      <figcaption className="titlemeal"> {mealName}</figcaption>
    </figure>
  );
}

Card.propTypes = {
  mealName: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  handlePage: PropTypes.func.isRequired,
};

export default Card;
