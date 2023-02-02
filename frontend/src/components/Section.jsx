import PropTypes from "prop-types";
import { useContext /* useState */ } from "react";
import Card from "./Card";
import MealPage from "./MealPage";
import MealType from "../prop-types/MealType";
import FiltersContext from "../FiltersContext";
import "./Section.css";

function Section({
  searchValue,
  meals,
  IsSearchActive,
  currentMeal,
  setCurrentMeal,
}) {
  const { validatedFilters } = useContext(FiltersContext);
  /* const [mealsFound, setMealsFound] = useState(true); */

  function checkFilters(meal, filters) {
    let check = true;
    if (filters.category.length !== 0 && meal.category !== filters.category) {
      check = false;
    }
    if (filters.area.length !== 0 && meal.area !== filters.area) {
      check = false;
    }
    if (
      filters.ingredients.length !== 0 &&
      !filters.ingredients.every((ingredient) =>
        meal.ingredients.includes(ingredient)
      )
    ) {
      check = false;
    }
    return check;
  }

  const result = meals.filter(
    (meal) =>
      meal.name.toLowerCase().includes(searchValue.toLowerCase()) &&
      checkFilters(meal, validatedFilters)
  );

  return (
    <div className="section">
      {currentMeal != null ? (
        <div className="display-meal">
          <MealPage
            mealName={currentMeal.name}
            image={currentMeal.image}
            ingredients={currentMeal.ingredients}
            measurements={currentMeal.measures}
            instructions={currentMeal.instructions}
            handlePage={() => {
              setCurrentMeal(null);
            }}
          />
        </div>
      ) : (
        <>
          {!IsSearchActive && (
            <section className="carousel">
              <h1 className="title">OUR SELECTION</h1>
              <div className="carousel-container">
                <div className="display-main">
                  {meals
                    .filter(
                      (meal) =>
                        meal.id === "52804" ||
                        meal.id === "53060" ||
                        meal.id === "52977" ||
                        meal.id === "53045" ||
                        meal.id === "52828"
                    )
                    .map((meal) => (
                      <Card
                        key={meal.id}
                        mealName={meal.name}
                        image={meal.image}
                        handlePage={() => {
                          setCurrentMeal(meal);
                        }}
                      />
                    ))}
                </div>
              </div>
              <h1 className="title">PORK MEALS</h1>
              <div className="carousel-container">
                <div className="display-main">
                  {meals
                    .filter(
                      (meal) =>
                        meal.id === "52995" ||
                        meal.id === "52949" ||
                        meal.id === "53035" ||
                        meal.id === "53018" ||
                        meal.id === "53037" ||
                        meal.id === "52999" ||
                        meal.id === "53044" ||
                        meal.id === "52994"
                    )
                    .map((meal) => (
                      <Card
                        key={meal.id}
                        mealName={meal.name}
                        image={meal.image}
                        handlePage={() => {
                          setCurrentMeal(meal);
                        }}
                      />
                    ))}
                </div>
              </div>
              <h1 className="title">CHICKEN MEALS</h1>
              <div className="carousel-container">
                <div className="display-main">
                  {meals
                    .filter(
                      (meal) =>
                        meal.id === "53028" ||
                        meal.id === "52996" ||
                        meal.id === "52993" ||
                        meal.id === "53020" ||
                        meal.id === "52937" ||
                        meal.id === "52830" ||
                        meal.id === "52818" ||
                        meal.id === "52765" ||
                        meal.id === "53039" ||
                        meal.id === "53011" ||
                        meal.id === "52780" ||
                        meal.id === "52772"
                    )
                    .map((meal) => (
                      <Card
                        key={meal.id}
                        mealName={meal.name}
                        image={meal.image}
                        handlePage={() => {
                          setCurrentMeal(meal);
                        }}
                      />
                    ))}
                </div>
              </div>
            </section>
          )}
          {!IsSearchActive && <h1 className="title">ALL MEALS</h1>}
          {result.length === 0 && (
            <h2 className="no-result">No matching result</h2>
          )}
          <div className="display-main rand">
            {result.map((meal) => (
              <Card
                key={meal.id}
                mealName={meal.name}
                image={meal.image}
                handlePage={() => {
                  setCurrentMeal(meal);
                }}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}
Section.propTypes = {
  meals: PropTypes.arrayOf(MealType).isRequired,
  searchValue: PropTypes.string.isRequired,
  IsSearchActive: PropTypes.bool.isRequired,
  currentMeal: MealType,
  setCurrentMeal: PropTypes.func.isRequired,
};
Section.defaultProps = {
  currentMeal: null,
};
export default Section;
