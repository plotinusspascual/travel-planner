const router = require('express').Router();
const { Traveller, Location, Trip } = require('../../models');

// GET all Travellers
router.get('/', async (req, res) => {
  try {
    const TravellerData = await Traveller.findAll({
      include: [{ model: Location }, {model: Trip }],
    });
    res.status(200).json(TravellerData);
  } catch (err) {
    res.status(500).json(err);
  }
});