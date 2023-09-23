const express = require('express');
const { URLSearchParams } = require('url');
const Recipe = require('../models/recipes');

const router = express.Router();

// Index (GET all)
router.get('/', async (req, res) => {
  const url = new URL(`${req.protocol}://${req.hostname}${req.originalUrl}`);
  const params = new URLSearchParams(url.search);
  const searchIngredients = params.getAll('ingredient');

  if (searchIngredients.length === 0) {
    try {
      const recipes = await Recipe.find({});
      res.json(recipes);
    } catch (err) {
      res.json({ err });
    }
  } else {
    // for multiple ingredients, iterate through array of searchIngredients
    // after try/catch, if there are recipes, compare to saved recipes and
    // only save the ones in both for partial matching, a more complex data
    // structure would be needed

    try {
      const recipes = await Recipe.find({
        'ingredientsList.ingredientName': { $all: searchIngredients },
      });
      if (recipes.length === 0) {
        res.send('no recipes were found');
      } else {
        res.json(recipes);
      }
    } catch (err) {
      res.json({ err });
    }
  }
});

// Get Receipe by ID...
router.get('/:id', async (req, res) => {
  try {
    const recipe = await Recipe.findById({ _id: req.params.id });
    res.send(recipe);
  } catch {
    res.status(404);
    res.send({ error: "Recipe doesn't exist!" });
  }
});

module.exports = router;
