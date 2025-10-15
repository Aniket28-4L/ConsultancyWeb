const express = require('express');
const router = express.Router();
const { createInquiry, getInquiries, getInquiryById, updateInquiryStatus } = require('../controllers/inquiryController');
const { protect, admin } = require('../middleware/authMiddleware');

router.route('/').post(createInquiry).get(protect, admin, getInquiries);
router.route('/:id').get(protect, admin, getInquiryById).put(protect, admin, updateInquiryStatus);

module.exports = router;