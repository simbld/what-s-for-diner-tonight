import PropTypes from "prop-types";
import React, { useState } from "react";

export default function MealsCard({
  foodImage,
  mealName,
  description,
  price,
  initialLikeCount,
  initialIsFavorite,
}) {
  const [likeCount, setLikeCount] = useState(initialLikeCount);
  const [isFavorite, setIsFavorite] = useState(initialIsFavorite);

  function handleClickFavorite() {
    setIsFavorite(!isFavorite);
    setLikeCount(isFavorite ? likeCount - 1 : likeCount + 1);
  }
  return (
    <div className="card">
      <div className="card-image">
        <figure className="image is-4by3">
          <img src={foodImage} alt={mealName} />
        </figure>
      </div>
      <div className="card-content">
        <div className="media">
          <div className="media-content">
            <p className="title is-4">{mealName}</p>
            <p className="subtitle is-6">{price} €</p>

            <p className="subtitle is-6">{description}</p>
          </div>
        </div>
        <div className="content">
          <button
            className="button is-primary"
            type="button"
            onClick={handleClickFavorite}
          >
            {isFavorite ? "Unfavorite" : "Favorite"}
          </button>
          <span className="like-count">{likeCount}</span>
        </div>
      </div>
    </div>
  );
}

MealsCard.propTypes = {
  mealName: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  foodImage: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  initialIsFavorite: PropTypes.bool.isRequired,
  initialLikeCount: PropTypes.number.isRequired,
};
