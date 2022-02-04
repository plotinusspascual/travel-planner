const router = require('express').Router();
const travellersRoutes = require('./travellersRoutes');
const locationRoutes = require('./locationRoutes');
const tripsRoutes = require('./tripsRoutes');

router.use('/travellers', travellersRoutes);
router.use('/locations', locationRoutes);
router.use('/trips', tripsRoutes);

module.exports = router;
