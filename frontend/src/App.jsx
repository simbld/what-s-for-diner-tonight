import { useEffect, useState } from "react";
import axios from "axios";
import { FiltersContextProvider } from "./FiltersContext";
import Section from "./components/Section";
import Header from "./components/Header";
import Popups from "./components/Popups";
import useFetch from "./data/allMeals";
import "./App.css";

const filters = {};
let allIngredients = [];

function App() {
  const [userSearch, setUserSearch] = useState("");
  const [searchValue, setSearchValue] = useState("");
  const [IsSearchActive, setIsSearchActive] = useState(false);
  const [placeholder, setPlaceholder] = useState("Search for anything...");
  const [currentMeal, setCurrentMeal] = useState();

  const { meals, isLoading } = useFetch();

  function handleChange(e) {
    setUserSearch(e.target.value);
  }
  function handleSubmit(e) {
    e.preventDefault();
    if (
      meals.filter((meal) =>
        meal.name.toLowerCase().includes(userSearch.toLowerCase())
      ).length !== 0
    ) {
      setCurrentMeal(null);
      setSearchValue(userSearch);
      setUserSearch("");
      setPlaceholder("Search for anything...");
      if (userSearch !== "") {
        setIsSearchActive(true);
      } else {
        setIsSearchActive(false);
      }
    } else {
      setUserSearch("");
      setPlaceholder(`"${userSearch}" not found`);
    }
  }

  useEffect(() => {
    const urls = [
      "https://www.themealdb.com/api/json/v2/9973533/list.php?c=list",
      "https://www.themealdb.com/api/json/v2/9973533/list.php?a=list",
    ];

    Promise.all(urls.map((url) => axios.get(url))).then((allResponses) => {
      allResponses.forEach((response, index) => {
        if (index === 0) {
          filters.categories = response.data.meals.map(
            ({ strCategory: label }) => ({ label })
          );
        }
        if (index === 1) {
          filters.area = response.data.meals.map(({ strArea: label }) => ({
            label,
          }));
        }
      });
    });
  }, []);

  meals.forEach((meal) => {
    allIngredients = allIngredients.concat(meal.ingredients);
    allIngredients = allIngredients.filter(
      (ingredient, index) => allIngredients.indexOf(ingredient) === index
    );
  });

  filters.ingredients = allIngredients.map((ingredient) => ({
    label: ingredient,
  }));

  return (
    <div className="App">
      <FiltersContextProvider>
        <Header
          userSearch={userSearch}
          onSubmit={(e) => handleSubmit(e)}
          onChange={(e) => handleChange(e)}
          placeholder={placeholder}
          isLoading={isLoading}
          filters={filters}
          setCurrentMeal={setCurrentMeal}
          setIsSearchActive={setIsSearchActive}
        />
        {isLoading && <p className="search-not-found">Loading meals...</p>}
        {!currentMeal && <Popups />}
        {!isLoading && (
          <Section
            searchValue={searchValue}
            meals={meals}
            IsSearchActive={IsSearchActive}
            currentMeal={currentMeal}
            setCurrentMeal={setCurrentMeal}
          />
        )}
      </FiltersContextProvider>
    </div>
  );
}

export default App;
