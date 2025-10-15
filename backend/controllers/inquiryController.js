const Inquiry = require('../models/inquiryModel');

// @desc    Create new inquiry
// @route   POST /api/inquiries
// @access  Public
const createInquiry = async (req, res) => {
  const { name, email, phone, message, inquiryType } = req.body;

  const inquiry = await Inquiry.create({
    name,
    email,
    phone,
    message,
    inquiryType
  });

  if (inquiry) {
    res.status(201).json(inquiry);
  } else {
    res.status(400);
    throw new Error('Invalid inquiry data');
  }
};

// @desc    Get all inquiries
// @route   GET /api/inquiries
// @access  Private/Admin
const getInquiries = async (req, res) => {
  const inquiries = await Inquiry.find({}).sort({ createdAt: -1 });
  res.json(inquiries);
};

// @desc    Get inquiry by ID
// @route   GET /api/inquiries/:id
// @access  Private/Admin
const getInquiryById = async (req, res) => {
  const inquiry = await Inquiry.findById(req.params.id);

  if (inquiry) {
    res.json(inquiry);
  } else {
    res.status(404);
    throw new Error('Inquiry not found');
  }
};

// @desc    Update inquiry status
// @route   PUT /api/inquiries/:id
// @access  Private/Admin
const updateInquiryStatus = async (req, res) => {
  const { status } = req.body;

  const inquiry = await Inquiry.findById(req.params.id);

  if (inquiry) {
    inquiry.status = status || inquiry.status;

    const updatedInquiry = await inquiry.save();
    res.json(updatedInquiry);
  } else {
    res.status(404);
    throw new Error('Inquiry not found');
  }
};

module.exports = { createInquiry, getInquiries, getInquiryById, updateInquiryStatus };