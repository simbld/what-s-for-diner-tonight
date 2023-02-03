import React from "react";
import PropTypes from "prop-types";
import MealsCard from "../MealsCard/MealsCard";
import "./MealsList.css";

function MealsList({ dataMeals }) {
  return (
    <div>
      {dataMeals.map(
        ({ mealName, description, foodImage, price, isFavorite }) => (
          <MealsCard
            mealName={mealName}
            description={description}
            foodImage={foodImage}
            price={price}
            initialIsFavorite={isFavorite}
            initialLikeCount={0}
          />
        )
      )}
    </div>
  );
}

MealsList.propTypes = {
  dataMeals: PropTypes.arrayOf(
    PropTypes.shape({
      mealName: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      foodImage: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      isFavorite: PropTypes.bool.isRequired,
    })
  ).isRequired,
};

export default MealsList;
