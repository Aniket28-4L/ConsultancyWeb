# Consultancy Backend API

This is the backend API for the Consultancy web application, providing endpoints for managing universities, countries, testimonials, inquiries, and user authentication.

## Setup

1. Install dependencies:
   ```
   npm install
   ```

2. Create a `.env` file in the root directory with the following variables:
   ```
   PORT=5000
   MONGO_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret
   NODE_ENV=development
   ```

3. Start the server:
   - Development mode: `npm run dev`
   - Production mode: `npm start`

## API Endpoints

### Users
- `POST /api/users` - Register a new user
- `POST /api/users/login` - Authenticate user & get token
- `GET /api/users` - Get all users (Admin only)

### Universities
- `GET /api/universities` - Get all universities
- `GET /api/universities/:id` - Get university by ID
- `POST /api/universities` - Create a new university (Admin only)
- `PUT /api/universities/:id` - Update university (Admin only)

### Countries
- `GET /api/countries` - Get all countries
- `GET /api/countries/:id` - Get country by ID
- `POST /api/countries` - Create a new country (Admin only)
- `PUT /api/countries/:id` - Update country (Admin only)

### Testimonials
- `GET /api/testimonials` - Get all testimonials
- `GET /api/testimonials/:id` - Get testimonial by ID
- `POST /api/testimonials` - Create a new testimonial (Admin only)
- `PUT /api/testimonials/:id` - Update testimonial (Admin only)
- `DELETE /api/testimonials/:id` - Delete testimonial (Admin only)

### Inquiries
- `GET /api/inquiries` - Get all inquiries (Admin only)
- `GET /api/inquiries/:id` - Get inquiry by ID (Admin only)
- `POST /api/inquiries` - Create a new inquiry (Public)
- `PUT /api/inquiries/:id/status` - Update inquiry status (Admin only)

## Project Structure

```
backend/
├── config/
│   └── db.js           # Database connection
├── controllers/        # Route controllers
├── middleware/         # Custom middleware
│   └── authMiddleware.js  # Authentication middleware
├── models/             # Mongoose models
├── routes/             # API routes
├── .env                # Environment variables
├── package.json        # Dependencies and scripts
└── server.js           # Entry point
```

## Authentication

The API uses JWT (JSON Web Tokens) for authentication. Protected routes require a valid token to be included in the request header:

```
Authorization: Bearer <token>
```

## Error Handling

The API returns appropriate HTTP status codes and error messages in JSON format:

```json
{
  "message": "Error message"
}
```