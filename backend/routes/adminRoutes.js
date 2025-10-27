const express = require('express');
const router = express.Router();
const { authAdmin, getAdminProfile } = require('../controllers/adminController');
const { protect, admin } = require('../middleware/authMiddleware');

router.post('/login', authAdmin);
router.get('/profile', protect, admin, getAdminProfile);

module.exports = router;