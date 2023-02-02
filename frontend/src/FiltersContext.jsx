import PropTypes from "prop-types";
import { createContext, useMemo, useState } from "react";

const FiltersContext = createContext();

export default FiltersContext;

export function FiltersContextProvider({ children }) {
  const [validatedFilters, setValidatedFilters] = useState({
    category: "",
    area: "",
    ingredients: [],
  });
  const [categoryFilter, setCategoryFilter] = useState(
    validatedFilters.category
  );
  const [areaFilter, setAreaFilter] = useState(validatedFilters.area);
  const [ingredientsFilters, setIngredientsFilters] = useState(
    validatedFilters.ingredients
  );

  const filtersContext = useMemo(
    () => ({
      categoryFilter,
      setCategoryFilter,
      areaFilter,
      setAreaFilter,
      ingredientsFilters,
      setIngredientsFilters,
      validatedFilters,
      setValidatedFilters,
    }),
    [categoryFilter, areaFilter, ingredientsFilters, validatedFilters]
  );

  return (
    <FiltersContext.Provider value={filtersContext}>
      {children}
    </FiltersContext.Provider>
  );
}

FiltersContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
