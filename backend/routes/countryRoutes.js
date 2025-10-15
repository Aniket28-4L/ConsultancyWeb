const express = require('express');
const router = express.Router();
const { getCountries, getCountryById, createCountry, updateCountry } = require('../controllers/countryController');
const { protect, admin } = require('../middleware/authMiddleware');

router.route('/').get(getCountries).post(protect, admin, createCountry);
router.route('/:id').get(getCountryById).put(protect, admin, updateCountry);

module.exports = router;