const express = require("express");

const router = express.Router();

const mealControllers = require("./controllers/mealsControllers");

router.get("/meals", mealControllers.browse);
router.get("/meals/:id", mealControllers.read);
router.put("/meals/:id", mealControllers.edit);
router.post("/meals", mealControllers.add);
router.delete("/meals/:id", mealControllers.destroy);

module.exports = router;
