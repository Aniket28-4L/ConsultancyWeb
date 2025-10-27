const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

// @desc    Auth admin & get token
// @route   POST /api/admin/login
// @access  Public
const authAdmin = async (req, res) => {
  const { username, password } = req.body;

  // Hardcoded admin credentials as specified
  const adminUsername = 'CONSUL';
  const adminPassword = '4723';

  if (username === adminUsername && password === adminPassword) {
    // Generate JWT token
    const token = jwt.sign(
      { 
        username: adminUsername,
        isAdmin: true 
      }, 
      process.env.JWT_SECRET, 
      { expiresIn: '24h' }
    );

    res.json({
      username: adminUsername,
      isAdmin: true,
      token
    });
  } else {
    res.status(401);
    throw new Error('Invalid username or password');
  }
};

// @desc    Get admin profile
// @route   GET /api/admin/profile
// @access  Private/Admin
const getAdminProfile = async (req, res) => {
  res.json({
    username: 'CONSUL',
    isAdmin: true
  });
};

module.exports = { authAdmin, getAdminProfile };