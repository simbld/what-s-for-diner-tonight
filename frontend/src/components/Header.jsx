import PropTypes from "prop-types";
import { useContext } from "react";
import Filters from "./Filters";
import SearchBar from "./SearchBar";
import "./Header.css";
import "./Filters.css";
import FiltersContext from "../FiltersContext";

function Header({
  userSearch,
  onSubmit,
  onChange,
  placeholder,
  setIsSearchActive,
  setCurrentMeal,
  isLoading,
  filters,
}) {
  const {
    setCategoryFilter,
    setAreaFilter,
    setIngredientsFilters,
    setValidatedFilters,
  } = useContext(FiltersContext);
  return (
    <header className="header">
      <div className="logosearchbar">
        <button
          className="logo"
          type="button"
          onClick={() => {
            setCurrentMeal();
            setIsSearchActive(false);
            setCategoryFilter("");
            setAreaFilter("");
            setIngredientsFilters([]);
            setValidatedFilters({
              category: "",
              area: "",
              ingredients: [],
            });
          }}
        >
          <img
            src="../src/assets/logo-texte.png"
            alt="logo"
            className="logo-header"
          />
        </button>
        <SearchBar
          userSearch={userSearch}
          onSubmit={onSubmit}
          onChange={onChange}
          placeholder={placeholder}
        />
      </div>
      {!isLoading && (
        <Filters filters={filters} setIsSearchActive={setIsSearchActive} />
      )}
    </header>
  );
}
Header.propTypes = {
  userSearch: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string.isRequired,
  setIsSearchActive: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
  setCurrentMeal: PropTypes.func.isRequired,
  filters: PropTypes.shape({
    categories: PropTypes.arrayOf(
      PropTypes.shape({
        label: PropTypes.string.isRequired,
      })
    ),
    ingredients: PropTypes.arrayOf(
      PropTypes.shape({
        label: PropTypes.string.isRequired,
      })
    ),
    area: PropTypes.arrayOf(
      PropTypes.shape({
        label: PropTypes.string.isRequired,
      })
    ),
  }).isRequired,
};
export default Header;
