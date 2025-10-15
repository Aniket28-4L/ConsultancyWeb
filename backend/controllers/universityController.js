const University = require('../models/universityModel');

// @desc    Get all universities
// @route   GET /api/universities
// @access  Public
const getUniversities = async (req, res) => {
  const universities = await University.find({}).populate('country', 'name');
  res.json(universities);
};

// @desc    Get university by ID
// @route   GET /api/universities/:id
// @access  Public
const getUniversityById = async (req, res) => {
  const university = await University.findById(req.params.id).populate('country', 'name');

  if (university) {
    res.json(university);
  } else {
    res.status(404);
    throw new Error('University not found');
  }
};

// @desc    Create a university
// @route   POST /api/universities
// @access  Private/Admin
const createUniversity = async (req, res) => {
  const { name, country, ranking, description, image, website, courses, admissionRequirements, admissionDeadlines } = req.body;

  const university = await University.create({
    name,
    country,
    ranking,
    description,
    image,
    website,
    courses,
    admissionRequirements,
    admissionDeadlines
  });

  if (university) {
    res.status(201).json(university);
  } else {
    res.status(400);
    throw new Error('Invalid university data');
  }
};

// @desc    Update a university
// @route   PUT /api/universities/:id
// @access  Private/Admin
const updateUniversity = async (req, res) => {
  const { name, country, ranking, description, image, website, courses, admissionRequirements, admissionDeadlines } = req.body;

  const university = await University.findById(req.params.id);

  if (university) {
    university.name = name || university.name;
    university.country = country || university.country;
    university.ranking = ranking || university.ranking;
    university.description = description || university.description;
    university.image = image || university.image;
    university.website = website || university.website;
    university.courses = courses || university.courses;
    university.admissionRequirements = admissionRequirements || university.admissionRequirements;
    university.admissionDeadlines = admissionDeadlines || university.admissionDeadlines;

    const updatedUniversity = await university.save();
    res.json(updatedUniversity);
  } else {
    res.status(404);
    throw new Error('University not found');
  }
};

module.exports = { getUniversities, getUniversityById, createUniversity, updateUniversity };