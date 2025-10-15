const express = require('express');
const router = express.Router();
const { 
  getTestimonials, 
  getTestimonialById, 
  createTestimonial, 
  updateTestimonial,
  deleteTestimonial 
} = require('../controllers/testimonialController');
const { protect, admin } = require('../middleware/authMiddleware');

router.route('/').get(getTestimonials).post(protect, admin, createTestimonial);
router
  .route('/:id')
  .get(getTestimonialById)
  .put(protect, admin, updateTestimonial)
  .delete(protect, admin, deleteTestimonial);

module.exports = router;