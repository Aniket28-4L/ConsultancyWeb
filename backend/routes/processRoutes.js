const express = require('express');
const router = express.Router();
const { 
  getProcesses, 
  getProcessById, 
  createProcess, 
  updateProcess, 
  deleteProcess 
} = require('../controllers/processController');
const { protect, admin } = require('../middleware/authMiddleware');

router.route('/')
  .get(getProcesses)
  .post(protect, admin, createProcess);

router.route('/:id')
  .get(getProcessById)
  .put(protect, admin, updateProcess)
  .delete(protect, admin, deleteProcess);

module.exports = router;