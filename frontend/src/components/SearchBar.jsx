import PropTypes from "prop-types";
import { useContext } from "react";
import FiltersContext from "../FiltersContext";
import useFetch from "../data/allMeals";
import "./SearchBar.css";
import loupe from "../assets/loupe.png";

function SearchBar({ userSearch, onSubmit, onChange, placeholder }) {
  const { meals } = useFetch();
  const { validatedFilters } = useContext(FiltersContext);

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

  return (
    <form className="search-bar" onSubmit={onSubmit}>
      <button className="zoom" type="submit">
        <img src={loupe} alt="search" />
      </button>
      <input
        list="suggestions"
        className="input-search-bar"
        value={userSearch}
        type="text"
        placeholder={placeholder}
        onChange={onChange}
      />
      <datalist id="suggestions">
        {meals
          .filter((meal) => checkFilters(meal, validatedFilters))
          .map((meal) => (
            <option key={meal.id} value={meal.name} label={meal.name} />
          ))}
      </datalist>
    </form>
  );
}

SearchBar.propTypes = {
  userSearch: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string.isRequired,
};
export default SearchBar;
