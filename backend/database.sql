DROP TABLE IF EXISTS meal;
CREATE TABLE meal (
  idMeal int(11) UNSIGNED PRIMARY KEY NOT NULL AUTO_INCREMENT,
  strMeal varchar(25) NOT NULL,
  strDrinkAlternate varchar(25) NULL,
  strCategory varchar(25) NOT NULL,
  strArea varchar(25) NOT NULL,
  strInstructions varchar(255) NOT NULL,
  strMealThumb varchar(255) NOT NULL,
  strTags varchar(255) NULL,
  strYoutube varchar(255) NULL,
  strIngredient1 varchar(25) NULL,
  strIngredient2 varchar(25) NULL,
  strIngredient3 varchar(25) NULL,
  strIngredient4 varchar(25) NULL,
  strIngredient5 varchar(25) NULL,
  strIngredient6 varchar(25) NULL,
  strIngredient7 varchar(25) NULL,
  strIngredient8 varchar(25) NULL,
  strIngredient9 varchar(25) NULL,
  strIngredient10 varchar(25) NULL,
  strIngredient11 varchar(25) NULL,
  strIngredient12 varchar(25) NULL,
  strIngredient13 varchar(25) NULL,
  strIngredient14 varchar(25) NULL,
  strIngredient15 varchar(25) NULL,
  strIngredient16 varchar(25) NULL,
  strIngredient17 varchar(25) NULL,
  strIngredient18 varchar(25) NULL,
  strIngredient19 varchar(25) NULL,
  strIngredient20 varchar(25) NULL,
  strMeasure1 varchar(25) NULL,
  strMeasure2 varchar(25) NULL,
  strMeasure3 varchar(25) NULL,
  strMeasure4 varchar(25) NULL,
  strMeasure5 varchar(25) NULL,
  strMeasure6 varchar(25) NULL,
  strMeasure7 varchar(25) NULL,
  strMeasure8 varchar(25) NULL,
  strMeasure9 varchar(25) NULL,
  strMeasure10 varchar(25) NULL,
  strMeasure11 varchar(25) NULL,
  strMeasure12 varchar(25) NULL,
  strMeasure13 varchar(25) NULL,
  strMeasure14 varchar(25) NULL,
  strMeasure15 varchar(25) NULL,
  strMeasure16 varchar(25) NULL,
  strMeasure17 varchar(25) NULL,
  strMeasure18 varchar(25) NULL,
  strMeasure19 varchar(25) NULL,
  strMeasure20 varchar(25) NULL,
  strSource varchar(255) NULL,
  strImageSource varchar(255) NULL,
  strCreativeCommonsConfirmed varchar(25) NULL,
  dateModified varchar(25) NULL

) ENGINE=InnoDB DEFAULT CHARSET=latin1;

INSERT INTO meal (title) VALUES ('Stuff'), ('Doodads');
