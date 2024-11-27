import express from "express";

const router = express.Router();

/* ************************************************************************* */
// Define Your API Routes Here
/* ************************************************************************* */

// API route for Series is Coming project

import seriesData from "./assets/seriesData";

router.get("/api/series", (_, res) => {
  res.status(200).send(seriesData);
});

router.get("/api/series/:id", (req, res) => {
  try {
    const { id } = req.params;

    const serie = seriesData.find((el) => el.id === id);

    res.status(200).send(serie);
  } catch (err) {
    console.error(err);
  }
});

router.get("/api/series/:id/character/:characId", (req, res) => {
  try {
    const { id, characId } = req.params;

    const getSerie = seriesData.find((el) => el.id === id);

    if (!getSerie) {
      throw new Error("No series have been found");
    }

    const character = getSerie.dataSeries.find((el) => el.id === +characId);

    if (character) {
      res.status(200).send(character);
    } else {
      res.status(404).send("No characters found");
    }
  } catch (err) {
    console.error(err);
  }
});

// Define item-related routes
import itemActions from "./modules/item/itemActions";

router.get("/api/items", itemActions.browse);
router.get("/api/items/:id", itemActions.read);
router.post("/api/items", itemActions.add);

/* ************************************************************************* */

export default router;