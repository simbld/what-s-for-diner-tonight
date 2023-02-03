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
          `https://www.themealdb.com/api/json/v2/9973533/search.php?f=${letter}`
        )
      )
    ).then((responses) => {
      const allMeals = responses.reduce((allPreviousMeals, response) => {
        const mealsForThisLetter = response.data.meals.map(
          ({
            idMeal: id,
            strMeal: name,
            strCategory: category,
            strArea: area,
            strTags: tags,
            strInstructions: instructions,
            strMealThumb: image,
            ...meal
          }) => ({
            id,
            name,
            category,
            area,
            tags,
            instructions,
            image,
            ingredients: Object.keys(meal)
              .filter(
                (key) => key.includes("strIngredient") && meal[key] != null
              )
              .map((key) => meal[key].toLowerCase()),
            measures: Object.keys(meal)
              .filter((key) => key.includes("strMeasure") && meal[key] != null)
              .map((key) => meal[key].toLowerCase()),
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
