const axios = require("axios");
const fs = require("fs");

async function getDataFromAPI() {
  try {
    const response = await axios.get(
      "https://www.themealdb.com/api/json/v2/9973533/search.php?s="
    );
    const { data } = response;

    fs.writeFile("data.json", JSON.stringify(data), (err) => {
      if (err) {
        console.error(err);
        return;
      }
      // eslint-disable-next-line no-restricted-syntax
      console.log("The file has been saved!");
    });
  } catch (error) {
    console.error(error);
  }
}

getDataFromAPI();
