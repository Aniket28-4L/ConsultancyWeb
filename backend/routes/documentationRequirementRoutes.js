const express = require('express');
const router = express.Router();
const { 
  getDocumentationRequirements, 
  getDocumentationRequirementById, 
  createDocumentationRequirement, 
  updateDocumentationRequirement, 
  deleteDocumentationRequirement 
} = require('../controllers/documentationRequirementController');
const { protect, admin } = require('../middleware/authMiddleware');

router.route('/')
  .get(getDocumentationRequirements)
  .post(protect, admin, createDocumentationRequirement);

router.route('/:id')
  .get(getDocumentationRequirementById)
  .put(protect, admin, updateDocumentationRequirement)
  .delete(protect, admin, deleteDocumentationRequirement);

module.exports = router;