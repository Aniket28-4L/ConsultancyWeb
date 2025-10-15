const Country = require('../models/countryModel');

// @desc    Get all countries
// @route   GET /api/countries
// @access  Public
const getCountries = async (req, res) => {
  const countries = await Country.find({});
  res.json(countries);
};

// @desc    Get country by ID
// @route   GET /api/countries/:id
// @access  Public
const getCountryById = async (req, res) => {
  const country = await Country.findById(req.params.id);

  if (country) {
    res.json(country);
  } else {
    res.status(404);
    throw new Error('Country not found');
  }
};

// @desc    Create a country
// @route   POST /api/countries
// @access  Private/Admin
const createCountry = async (req, res) => {
  const { name, description, image, studyInfo, workInfo, visaRequirements, costOfLiving, popularCities } = req.body;

  const country = await Country.create({
    name,
    description,
    image,
    studyInfo,
    workInfo,
    visaRequirements,
    costOfLiving,
    popularCities
  });

  if (country) {
    res.status(201).json(country);
  } else {
    res.status(400);
    throw new Error('Invalid country data');
  }
};

// @desc    Update a country
// @route   PUT /api/countries/:id
// @access  Private/Admin
const updateCountry = async (req, res) => {
  const { name, description, image, studyInfo, workInfo, visaRequirements, costOfLiving, popularCities } = req.body;

  const country = await Country.findById(req.params.id);

  if (country) {
    country.name = name || country.name;
    country.description = description || country.description;
    country.image = image || country.image;
    country.studyInfo = studyInfo || country.studyInfo;
    country.workInfo = workInfo || country.workInfo;
    country.visaRequirements = visaRequirements || country.visaRequirements;
    country.costOfLiving = costOfLiving || country.costOfLiving;
    country.popularCities = popularCities || country.popularCities;

    const updatedCountry = await country.save();
    res.json(updatedCountry);
  } else {
    res.status(404);
    throw new Error('Country not found');
  }
};

module.exports = { getCountries, getCountryById, createCountry, updateCountry };