import axios from "axios";
import { useState, useEffect } from "react";

const alphabet = "abcdefghijklmnoprstvwy".split("");

const useFetch = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [meals, setMeals] = useState([]);

  function fetchApi() {
    Promise.all(
      alphabet.map((letter) =>
        axios.get(
          `https://www.themealdb.com/api/json/v2/process.env.API_KEY/search.php?s=${letter}`
        )
      )
    ).then((responses) => {
      const allMeals = responses.reduce((allPreviousMeals, response) => {
        const mealsForThisLetter = response.data.meals.map(
          ({
            idMeal: id,
            strMeal: name,
            strCategory: category,
            strArea: country,
            strTags: genre,
            strInstructions: instructions,
            strMealThumb: image,
            // eslint-disable-next-line no-shadow
            ...meals
          }) => ({
            id,
            name,
            category,
            country,
            genre,
            instructions,
            image,
            ingredients: Object.keys(meals)
              .filter(
                (key) => key.includes("strIngredient") && meals[key] != null
              )
              .map((key) => meals[key].toLowerCase()),
            measures: Object.keys(meals)
              .filter((key) => key.includes("strMeasure") && meals[key] != null)
              .map((key) => meals[key].toLowerCase()),
          })
        );

        return [...allPreviousMeals, ...mealsForThisLetter];
      }, []);

      setMeals(allMeals);
      setIsLoading(false);
    });
  }

  useEffect(() => {
    fetchApi();
  }, []);

  return { meals, isLoading };
};

export default useFetch;
