import React from "react";
import "./App.css";
import MealsList from "./components/MealsList/MealsList";
import dataMeals from "./Data/Data";

function App() {
  return (
    <div>
      <h1>What's the diner tonight</h1>
      <MealsList dataMeals={dataMeals} />
    </div>
  );
}

export default App;
