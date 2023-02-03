import MealType from "../prop-types/MealType";

function MealPage({
  mealName,
  image,
  ingredients,
  measurements,
  instructions,
  handlePage,
}) {
  return (
    <div>
      <button className="cross" type="button" onClick={handlePage}>
        <img className="imagemeal" src="../src/assets/close.png" alt="cross" />
      </button>
      <div className="content">
        <div>
          <img className="mealpage" src={image} alt={mealName} />
        </div>
        <div className="list">
          <h1 className="meal-name"> {mealName} </h1>
          <div className="container">
            <ul className="ingredients">
              {ingredients.map((ingredient) => (
                <li key={ingredient}>{ingredient}</li>
              ))}
            </ul>
            <ul className="measurements">
              {measurements.map((measure) => (
                <li key={measure}>{measure}</li>
              ))}
            </ul>
          </div>
          <div className="instructionspage">
            <p className="instructions"> {instructions} </p>
          </div>
        </div>
      </div>
    </div>
  );
}

MealPage.propTypes = MealType.isRequired;

export default MealPage;
