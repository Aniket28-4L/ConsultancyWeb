import DocumentationRequirement from '../models/DocumentationRequirement.js';

// @desc    Get all documentation requirements
// @route   GET /api/documentation-requirements
// @access  Public
const getDocumentationRequirements = async (req, res) => {
  const documentationRequirements = await DocumentationRequirement.find({}).populate('country');
  res.json(documentationRequirements);
};

// @desc    Get documentation requirement by ID
// @route   GET /api/documentation-requirements/:id
// @access  Public
const getDocumentationRequirementById = async (req, res) => {
  const documentationRequirement = await DocumentationRequirement.findById(req.params.id).populate('country');

  if (documentationRequirement) {
    res.json(documentationRequirement);
  } else {
    res.status(404);
    throw new Error('Documentation requirement not found');
  }
};

// @desc    Create a documentation requirement
// @route   POST /api/documentation-requirements
// @access  Private/Admin
const createDocumentationRequirement = async (req, res) => {
  const { title, description, documentType, country } = req.body;

  const documentationRequirement = await DocumentationRequirement.create({
    title,
    description,
    documentType,
    country
  });

  if (documentationRequirement) {
    res.status(201).json(documentationRequirement);
  } else {
    res.status(400);
    throw new Error('Invalid documentation requirement data');
  }
};

// @desc    Update a documentation requirement
// @route   PUT /api/documentation-requirements/:id
// @access  Private/Admin
const updateDocumentationRequirement = async (req, res) => {
  const { title, description, documentType, country } = req.body;

  const documentationRequirement = await DocumentationRequirement.findById(req.params.id);

  if (documentationRequirement) {
    documentationRequirement.title = title || documentationRequirement.title;
    documentationRequirement.description = description || documentationRequirement.description;
    documentationRequirement.documentType = documentType || documentationRequirement.documentType;
    documentationRequirement.country = country || documentationRequirement.country;

    const updatedDocumentationRequirement = await documentationRequirement.save();
    res.json(updatedDocumentationRequirement);
  } else {
    res.status(404);
    throw new Error('Documentation requirement not found');
  }
};

// @desc    Delete a documentation requirement
// @route   DELETE /api/documentation-requirements/:id
// @access  Private/Admin
const deleteDocumentationRequirement = async (req, res) => {
  const documentationRequirement = await DocumentationRequirement.findById(req.params.id);

  if (documentationRequirement) {
    await documentationRequirement.deleteOne();
    res.json({ message: 'Documentation requirement removed' });
  } else {
    res.status(404);
    throw new Error('Documentation requirement not found');
  }
};

export{
  getDocumentationRequirements,
  getDocumentationRequirementById,
  createDocumentationRequirement,
  updateDocumentationRequirement,
  deleteDocumentationRequirement
};