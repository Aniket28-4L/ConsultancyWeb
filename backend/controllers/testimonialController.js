import Testimonial from '../models/testimonialModel.js';

// @desc    Get all testimonials
// @route   GET /api/testimonials
// @access  Public
const getTestimonials = async (req, res) => {
  const testimonials = await Testimonial.find({});
  res.json(testimonials);
};

// @desc    Get testimonial by ID
// @route   GET /api/testimonials/:id
// @access  Public
const getTestimonialById = async (req, res) => {
  const testimonial = await Testimonial.findById(req.params.id);

  if (testimonial) {
    res.json(testimonial);
  } else {
    res.status(404);
    throw new Error('Testimonial not found');
  }
};

// @desc    Create a testimonial
// @route   POST /api/testimonials
// @access  Private/Admin
const createTestimonial = async (req, res) => {
  const { name, content, rating, image, serviceType } = req.body;

  const testimonial = await Testimonial.create({
    name,
    content,
    rating,
    image,
    serviceType
  });

  if (testimonial) {
    res.status(201).json(testimonial);
  } else {
    res.status(400);
    throw new Error('Invalid testimonial data');
  }
};

// @desc    Update a testimonial
// @route   PUT /api/testimonials/:id
// @access  Private/Admin
const updateTestimonial = async (req, res) => {
  const { name, content, rating, image, serviceType } = req.body;

  const testimonial = await Testimonial.findById(req.params.id);

  if (testimonial) {
    testimonial.name = name || testimonial.name;
    testimonial.content = content || testimonial.content;
    testimonial.rating = rating || testimonial.rating;
    testimonial.image = image || testimonial.image;
    testimonial.serviceType = serviceType || testimonial.serviceType;

    const updatedTestimonial = await testimonial.save();
    res.json(updatedTestimonial);
  } else {
    res.status(404);
    throw new Error('Testimonial not found');
  }
};

// @desc    Delete a testimonial
// @route   DELETE /api/testimonials/:id
// @access  Private/Admin
const deleteTestimonial = async (req, res) => {
  const testimonial = await Testimonial.findById(req.params.id);

  if (testimonial) {
    await testimonial.deleteOne();
    res.json({ message: 'Testimonial removed' });
  } else {
    res.status(404);
    throw new Error('Testimonial not found');
  }
};

export{ 
  getTestimonials, 
  getTestimonialById, 
  createTestimonial, 
  updateTestimonial,
  deleteTestimonial 
};