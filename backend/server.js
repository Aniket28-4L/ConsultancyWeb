const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const morgan = require('morgan');
const connectDB = require('./config/db');

// Load environment variables
dotenv.config();

// Connect to database
connectDB();

// Initialize express app
const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Logger
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

// Routes
app.use('/api/inquiries', require('./routes/inquiryRoutes'));
app.use('/api/universities', require('./routes/universityRoutes'));
app.use('/api/countries', require('./routes/countryRoutes'));
app.use('/api/testimonials', require('./routes/testimonialRoutes'));
app.use('/api/users', require('./routes/userRoutes'));
app.use('/api/admin', require('./routes/adminRoutes'));
app.use('/api/processes', require('./routes/processRoutes'));
app.use('/api/services', require('./routes/serviceRoutes'));
app.use('/api/documentation-requirements', require('./routes/documentationRequirementRoutes'));

// Root route
app.get('/', (req, res) => {
  res.send('API is running...');
});

// Error handler middleware
app.use((err, req, res, next) => {
  const statusCode = res.statusCode === 200 ? 500 : res.statusCode;
  res.status(statusCode);
  res.json({
    message: err.message,
    stack: process.env.NODE_ENV === 'production' ? null : err.stack,
  });
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`);
});