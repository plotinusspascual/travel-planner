const router = require('express').Router();
const travellersRoutes = require('./travellersRoutes');
const locationRoutes = require('./locationRoutes');
const tripRoutes = require('./tripRoutes');

router.use('/travellers', travellersRoutes);
router.use('/locations', locationRoutes);
router.use('/trip', tripRoutes);

module.exports = router;
