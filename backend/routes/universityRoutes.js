const express = require('express');
const router = express.Router();
const { getUniversities, getUniversityById, createUniversity, updateUniversity } = require('../controllers/universityController');
const { protect, admin } = require('../middleware/authMiddleware');

router.route('/').get(getUniversities).post(protect, admin, createUniversity);
router.route('/:id').get(getUniversityById).put(protect, admin, updateUniversity);

module.exports = router;